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
  model: Record<string,any>
  rules: FormRules
}

export interface FormItemContext {
  validate: (trigger?: string) => any
}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export const formContextKey: InjectionKey<FormContext> = 
Symbol('formContextKey')

// 特定时机自动触发
export const formItemContextKey: InjectionKey<FormItemContext> = 
Symbol('formItemContextKey')