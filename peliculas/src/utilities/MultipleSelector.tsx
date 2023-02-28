import "../styles/MultipleSelector.css";

export default function MultipleSelector(props: IMultipleSelectorProps) {
  function selectItem(item: IMultipleSelectorModel) {
    const selectedItems = [...props.selectedItems, item];
    const unSelectedItems = props.unSelectedItems.filter((v) => v !== item);
    props.onChange(selectedItems, unSelectedItems);
  }

  function unSelectItem(item: IMultipleSelectorModel): void {
    const selectedItems = props.selectedItems.filter((v) => v !== item);
    const unSelectItems = [...props.unSelectedItems, item];
    props.onChange(selectedItems, unSelectItems);
  }

  function selectAllItems() {
    const selectedItems = [...props.selectedItems, ...props.unSelectedItems];
    const unSelectedItems: IMultipleSelectorModel[] = [];
    props.onChange(selectedItems, unSelectedItems);
  }

  function unSelectAllItems() {
    const selectedItems: IMultipleSelectorModel[] = [];
    const unSelectedItems = [...props.selectedItems, ...props.unSelectedItems];
    props.onChange(selectedItems, unSelectedItems);
  }

  return (
    <div className='multiple-selector'>
      <ul>
        {props.unSelectedItems.map((item) => (
          <li key={item.key} onClick={() => selectItem(item)}>
            {item.value}
          </li>
        ))}
      </ul>
      <ul>
        <button
          className='multiple-selector-buttons'
          onClick={selectAllItems}
          type='button'>
          {">>"}
        </button>
        <button
          className='multiple-selector-buttons'
          onClick={unSelectAllItems}
          type='button'>
          {"<<"}
        </button>
      </ul>
      <ul>
        {props.selectedItems.map((item) => (
          <li key={item.key} onClick={() => unSelectItem(item)}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface IMultipleSelectorProps {
  selectedItems: IMultipleSelectorModel[];
  unSelectedItems: IMultipleSelectorModel[];
  onChange(
    selected: IMultipleSelectorModel[],
    unSelected: IMultipleSelectorModel[]
  ): void;
}

export interface IMultipleSelectorModel {
  key: number;
  value: string;
}
