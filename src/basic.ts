/**
 * $Keys
 * @desc 获取对象类型`T`所有键的并集
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: "name" | "age" | "visible"
 *   type PropsKeys = $Keys<Props>;
 */
export type $Keys<T extends object> = keyof T;

/**
 * $Values
 * @desc 获取对象类型`T`所有值类型的并集
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: string | number | boolean
 *   type PropsValues = $Values<Props>;
 */
export type $Values<T extends object> = T[keyof T];

/**
 * $PropertyType
 * @desc 获取对象`T`中指定键`K`的值的类型
 * @example
 *   // Expect: string;
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NameType = $PropertyType<Props, 'name'>;
 *
 *   // Expect: boolean
 *   type Tuple = [boolean, number];
 *   type A = $PropertyType<Tuple, '0'>;
 *   // Expect: number
 *   type B = $PropertyType<Tuple, '1'>;
 */
export type $PropertyType<T extends object, K extends keyof T> = T[K];

/**
 * $ElementType
 * @desc 获取数组、元组或类型为T的对象内的元素类型，这些元素与给定的索引类型K匹配
 * @example
 *   // Expect: string;
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NameType = $ElementType<Props, 'name'>;
 *
 *   // Expect: boolean
 *   type Tuple = [boolean, number];
 *   type A = $ElementType<Tuple, '0'>;
 *   // Expect: number
 *   type B = $ElementType<Tuple, '1'>;
 *
 *   // Expect: boolean
 *   type Arr = boolean[];
 *   type ItemsType = $ElementType<Arr, number>;
 *
 *   // Expect: number
 *   type Obj = { [key: string]: number };
 *   type ValuesType = $ElementType<Obj, string>;
 */
export type $ElementType<
  T extends { [P in K & any]: any },
  K extends keyof T | number
> = T[K];

/**
 * $Shape
 * @desc 将对象的属性全部转换为可选
 * @see https://flow.org/en/docs/types/utilities/#toc-shape
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: Partial<Props>
 *   type PartialProps = $Shape<Props>;
 */
export type $Shape<T extends object> = Partial<T>;

/**
 * $NonMaybeType
 * @desc 从`T`中排除`null`和`undefined`
 * @see https://flow.org/en/docs/types/utilities/#toc-nonmaybe
 * @example
 *   type MaybeName = string | null;
 *
 *   // Expect: string
 *   type Name = $NonMaybeType<MaybeName>;
 */
export type $NonMaybeType<T> = NonNullable<T>;

/**
 * Primitive
 * @desc 原始数据类型
 */
export type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

/**
 * Falsy
 * @desc 在TypeScript中代表假值: `false | "" | 0 | null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined | false;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Falsy>;
 */
export type Falsy = false | '' | 0 | null | undefined;

/**
 * Nullish
 * @desc 在TypeScript中代表空值, [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing]
 * @example
 *   type Various = 'a' | 'b' | undefined;
 *   
 *   // Expect: "a" | "b"
 *   Exclude<Various, Nullish>;
 */
export type Nullish = null | undefined;