import { Segmented, SegmentedProps } from "antd";
import useHooks from "../../hooks/useHooks.tsx";

function Index(props: SegmentedProps) {
  const { query, navigate, qs, get } = useHooks();
  return (
    <Segmented
      {...props}
      defaultValue={get(query, props.name || "tab") || props.defaultValue}
      onChange={value => {
        navigate({
          search: qs.stringify({
            ...query,
            [props.name || "tab"]: value
          })
        });
      }}
    />
  );
}

export default Index;
