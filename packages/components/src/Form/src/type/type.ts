import type { InjectionKey } from "vue"
import type { RuleItem, ValidateError, ValidateFieldsError } from "async-validator"
export interface FormItemProps {
  label: string
  // 类型
  prop?: string
}

export interface FormProps {
  model: Record<string,any>
  rules: Record<string,any>
}
export interface FormItemRules extends RuleItem {
  trigger?: string
}
export type FormRules = Record<string,FormItemRules[]>

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void

}

export interface FormItemContext {
  // 类型
  prop?: string
  validate: (trigger?: string) => Promise<any>
  resetField() : void
  clearValidate() : void
}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface FormInstance {
  validate: () => Promise<any>
  resetFields: (props: string[]) => void
  clearValidate:(props: string[]) => void
}

export interface validateStatusProp{
  state: 'init' | 'success' | 'error'
  errorMsg: string
  loading: boolean
}

export interface FormItemInstance {
  validateStatus: validateStatusProp
  validate: (trigger?: string) => Promise<any>
  resetField: () => void
  clearValidate:() => void
}


export const formContextKey: InjectionKey<FormContext> = 
Symbol('formContextKey')

// 特定时机自动触发
export const formItemContextKey: InjectionKey<FormItemContext> = 
Symbol('formItemContextKey')