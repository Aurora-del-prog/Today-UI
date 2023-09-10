import type {Value} from 'async-validator'

export interface formItemProps{
  label?: string,
  field?: string,
}

// 可能是异步结果-从服务器校验之后返回
export type FormItemContext = {
  validate: () => Promise<Value>
}
