import { Pagination as AntPagination, PaginationProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs";
import { get } from "lodash";
import { TMeta } from "../../services/types";

interface Props extends PaginationProps {
  prefix?: string;
  meta?: TMeta;
  limit?: number;
}
const Pagination = (props: Props) => {
  const { prefix = "", limit = 50, meta } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });

  const currentPage =
    Number(get(params, prefix ? `${prefix}-page` : "page", 1)) || 1;
  const _limit =
    Number(get(params, prefix ? `${prefix}-limit` : "limit", limit)) || limit;
  const onChange = (page: number, pageSize?: number) => {
    navigate({
      search: qs.stringify({
        ...params,
        [`${prefix ? `${prefix}-page` : "page"}`]:
          page === currentPage && _limit !== pageSize ? 1 : page,
        [`${prefix ? `${prefix}-limit` : "limit"}`]:
          pageSize ||
          Number(get(params, prefix ? `${prefix}-limit` : "limit", 50))
      })
    });
  };

  return get(meta, "total", 0) > _limit ? (
    <AntPagination
      showSizeChanger
      current={currentPage}
      pageSize={limit}
      onChange={onChange}
      total={get(meta, "total", 0)}
      pageSizeOptions={[20, 50, 100, 200]}
      {...props}
    />
  ) : null;
};

export default Pagination;
