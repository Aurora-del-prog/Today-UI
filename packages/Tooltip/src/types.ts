import type { Placement, Options } from '@popperjs/core'
export interface TooltipProps {
  content? : string;
  trigger?: 'hover' | 'click';
  placement?: Placement;
  manual?: boolean;
  // Popper.js的选项，部分选项类型，可选。默认为undefined。Popper.js是一个用于创建弹出框和下拉菜单等定位的库，这里可以传递一些配置选项给Popper.js。
  popperOptions?: Partial<Options>;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean) : void;
  (e: 'click-outside', value: boolean) : void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}