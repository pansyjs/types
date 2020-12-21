import { Primitive } from './basic';

/**
 * SetIntersection
 * @desc 设置给定的联合类型`A`和`B`的交集
 * @example 
 *   // Expect: "2" | "3"
 *   SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: () => void
 *   SetIntersection<string | number | (() => void), Function>;
 */
export type SetIntersection<A, B> = A extends B ? A : never;

/**
 * SetDifference
 * @desc 设置给定的联合类型`A`和`B`的
 * @example 
*   // Expect: "1"
 *   SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: string | number
 *   SetDifference<string | number | (() => void), Function>;
 */
export type SetDifference<A, B> = A extends B ? never : A;

/**
 * NonUndefined
 * @desc 过滤掉联合类型中的`undefined`
 * @example 
 *   // Expect: "string | null"
 *   NonUndefined<string | null | undefined>;
 */
export type NonUndefined<T> = T extends undefined ? never : T;

/**
 * NonNullable
 * @desc 过滤掉联合类型中的`undefined`和`null`，已内置(v2.8)
 * @example 
 *   // Expect: "string | null"
 *   NonUndefined<string | null | undefined>;
 */
// type NonNullable<T> = T extends null | undefined ? never : T;