
export interface DialogProps {
  modelValue?: boolean,
  title?: string,
  width?: string | number,
  center?: boolean,
  showClose?: boolean,
  showMask?:boolean,
  alignCenter?: boolean
}
export interface DialogEmits {
  (e: 'update:modelValue', value: boolean) : void;
}
