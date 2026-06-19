import Input from "./input";
import InputPrice from "./input-price";
import InputMask from "./input-mask";
import Select from "./select";
import AsyncSelect from "./async-select";
import Datepicker from "./datepicker";
import RangePicker from "./rangepicker";
import Upload from "./upload";
import LoginInput from "./login-input";
import InputSearchable from "./input-searchable";
import Password from "./password";
import Switch from "./switch";
import Checkbox from "./checkbox";
import TextArea from "./textarea";
import UploadImg from "./upload-img";
import Ckeditor from "./ckeditor";
import InputAsyncSelect from "./input-async-select";
import TreeAsyncSelect from './tree-async-select'
import Wrapper from "./wrapper";
import Tags from "./tags";
import YandexMap from "./yandex-map";
const WrappedInput = Wrapper(Input);
const WrappedInputAsyncSelect = Wrapper(InputAsyncSelect);
const WrappedInputPrice = Wrapper(InputPrice);
const WrappedInputMask = Wrapper(InputMask);
const WrappedSelect = Wrapper(Select);
const WrappedAsyncSelect = Wrapper(AsyncSelect);
const WrappedDatepicker = Wrapper(Datepicker);
const WrappedRangePicker = Wrapper(RangePicker);
const WrappedUpload = Wrapper(Upload);
const WrappedUploadImg = Wrapper(UploadImg);
const WrappedCkeditor = Wrapper(Ckeditor);
const WrappedLoginInput = Wrapper(LoginInput);
const WrappedInputSearchable = Wrapper(InputSearchable);
const WrappedPassword = Wrapper(Password);
const WrappedTextArea = Wrapper(TextArea);
const WrappedTreeAsyncSelect = Wrapper(TreeAsyncSelect)
const WrappedTags = Wrapper(Tags)
const WrappedYandexMap = Wrapper(YandexMap)

export default {
  TextArea: WrappedTextArea,
  InputAsyncSelect: WrappedInputAsyncSelect,
  Input: WrappedInput,
  InputPrice: WrappedInputPrice,
  InputMask: WrappedInputMask,
  Select: WrappedSelect,
  AsyncSelect: WrappedAsyncSelect,
  Datepicker: WrappedDatepicker,
  RangePicker: WrappedRangePicker,
  Upload: WrappedUpload,
  UploadImg: WrappedUploadImg,
  Ckeditor: WrappedCkeditor,
  LoginInput: WrappedLoginInput,
  InputSearchable: WrappedInputSearchable,
  Password: WrappedPassword,
  TreeAsyncSelect: WrappedTreeAsyncSelect,
  Tags: WrappedTags,
  YandexMap: WrappedYandexMap,
  Switch,
  Checkbox,
};
