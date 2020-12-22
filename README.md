<h1 align="center">
  @pansy/types
</h1>

<div align="center">
  实用的类型集合
</div>

> TypeScript >= 3.4

## 🏗 安装

```sh
# npm install
$ npm install @pansy/types --save

# yarn install
$ yarn add @pansy/types
```

## 🔨 使用

```
import { NonUndefined } from '@pansy/types';

type FooWithoutRainbow = NonUndefined<string | null | undefined>;
//=> string | null
```

## 目录

- 内置类型 
  - [`Partial<T>`](#partialt) 将`T`中所有的属性设为可选
  - [`Readonly<T>`](#readonlyt) 将`T`中所有的属性设为只读
  - [`Pick<T,K>`](#picktk-1) 从`T`中过滤出属性`K`
  - [`Record<T,K>`](#recordtk-1) 标记对象的 key value类型
  - [`Exclude<T,U>`](#excludetu-1) 从`T`可分配给的类型中排除`U`
  - [`Extract<T,U>`](#extracttu-1) 从`T`可分配给的类型中提取`U`
  - [`NonNullable<T>`](#nonnullablet) 从`T`中排除`null`和`undefined`
  - [`ReturnType`](#returntypet) 获取函数类型`T`的返回类型
  - [`InstanceType`](#instancetypet) 获取构造函数类型`T`的实例类型
  - [`Required<T>`](#requiredt) 将`T`中所有的属性设为必填
  - [`Parameters<T>`](#parameterst) 获取一个函数的所有参数类型
  - [`ConstructorParameters<T>`](#parameterst) 获取构造函数的所有参数类型
  - [`Omit<T,K>`](#omittk-1) 通过从`T`选取所有属性然后删除`K`来构造类型
  - [`Uppercase<S>`](#uppercases) 将字符串中的每个字符转换为大写 4.1
  - [`Lowercase<S>`](#lowercases) 将字符串中的每个字符转换为小写 4.1
  - [`Capitalize<S>`](#capitalizes) -将字符串中的第一个字符转换为大写 4.1
  - [`Uncapitalize<S>`](#uncapitalizes) 将字符串中的第一个字符转换为小写 4.1

### `Partial<T>`

将`T`中所有的属性设为可选, 内置版本v2.1。

<details>
  <summary>
    示例
  </summary>

  ```ts
  interface NodeConfig {
    appName: string;
    port: number;
  }
  // Expect: { appName?: string; port?: number; }
  Partial<NodeConfig>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Readonly<T>`

将`T`中所有的属性设为只读, 内置版本v2.1。

<details>
  <summary>
    示例
  </summary>

  ```ts
  interface NodeConfig {
    appName: string;
    port?: number;
  }
  // Expect: { readonly appName: string; readonly port?: number; }
  Readonly<NodeConfig>;
  ```
</details>

[⇧ 回到目录](#目录)
### `Pick<T, K>`

从 `T` 中过滤出属性 `K`, 内置版本v2.1。

<details>
  <summary>
    示例
  </summary>

  ```ts
  interface NodeConfig {
    name: string;
    appName: string;
    port?: number;
  }
  // Expect: { name: string; }
  Pick<NodeConfig, 'name'>;
  ```
</details>

[⇧ 回到目录](#目录)
## `Record<T,K>`

标记对象的 key value类型, 内置版本v2.1。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: { [key: string]: number; }
  Record<string, number>;
  ```
</details>

[⇧ 回到目录](#目录)
### `Exclude<T,U>`

从`T`可分配给的类型中排除`U`, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: 'b' | 'd'
  Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  ```
</details>

[⇧ 回到目录](#目录)

### `Extract<T,U>`

从`T`可分配给的类型中提取`U`, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: 'a' | 'c'
  Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  ```
</details>

[⇧ 回到目录](#目录)
### `NonNullable<T>`

从`T`中排除`null`和`undefined`, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: string
  NonNullable<string | null | undefined>;
  ```
</details>

[⇧ 回到目录](#目录)

### `ReturnType<T>`

获取函数类型`T`的返回类型, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: string
  ReturnType<() => string>;
  ```
</details>

[⇧ 回到目录](#目录)

### `InstanceType<T>`

获取构造函数类型`T`的实例类型, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  class C {
    x = 0;
    y = 0;
  }

  // Expect: C
  InstanceType<typeof C>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Required<T>` 

将`T`中所有的属性设为必填, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  interface NodeConfig {
    appName?: string;
    port?: number;
  }
  // Expect: { appName: string; port: number; }
  Required<NodeConfig>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Parameters<T>`

获取一个函数的所有参数类型, 内置版本v3.6。

<details>
  <summary>
    示例
  </summary>

  ```ts
  function shuffle(input: string, input1: number): void {}

  // Expect: { input: string; input1: number; }
  Parameters<typeof shuffle>;
  ```
</details>

[⇧ 回到目录](#目录)

### `ConstructorParameters<T>`

获取构造函数的所有参数类型

<details>
  <summary>
    示例
  </summary>

  ```ts  
  class A {
    constructor(input: string, input1: number) {}
  }

  // Expect: { input: string; input1: number; }
  ConstructorParameters<typeof A>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Omit<T,K>`

通过从`T`选取所有属性然后删除`K`来构造类型, 内置版本v3.5。

<details>
  <summary>
    示例
  </summary>

  ```ts  
  interface Animal {
 		imageUrl: string;
 		species: string;
 		images: string[];
 		paragraphs: string[];
  }

  // Expect: { images: string[]; paragraphs: string[]; }
  Omit<Animal, 'imageUrl' | 'species'>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Uppercase<S>`

将字符串中的每个字符转换为大写

<details>
  <summary>
    示例
  </summary>

  ```ts  
  // Expect: 'HELLO'
  Uppercase<'hello'>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Lowercase<S>`

将字符串中的每个字符转换为小写

<details>
  <summary>
    示例
  </summary>

  ```ts  
  // Expect: 'hello'
  Uppercase<'HELLO'>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Capitalize<S>`

将字符串中的第一个字符转换为大写

<details>
  <summary>
    示例
  </summary>

  ```ts  
  // Expect: 'Hello'
  Capitalize<'hello'>;
  ```
</details>

[⇧ 回到目录](#目录)

### `Uncapitalize<S>`

将字符串中的第一个字符转换为小写

<details>
  <summary>
    示例
  </summary>

  ```ts  
  // Expect: 'hello'
  Uncapitalize<'Hello'>;
  ```
</details>

[⇧ 回到目录](#目录)