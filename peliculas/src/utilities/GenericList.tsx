import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if (!props.templateList) {
    if (props.loadingUIComponent) {
      return props.loadingUIComponent;
    }
    return <Loading />;
  } else if (props.templateList.length === 0) {
    if (props.emptyListTemplate) {
      return props.emptyListTemplate;
    }
    return <>There are not movies to show</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  templateList: any;
  children: ReactElement;
  loadingUIComponent?: ReactElement;
  emptyListTemplate?: ReactElement;
}
