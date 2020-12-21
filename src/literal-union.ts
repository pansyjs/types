import { Primitive } from './basic';

export type LiteralUnion<
	LiteralType,
	BaseType extends Primitive
> = LiteralType | (BaseType & {_?: never});