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
  - [`Pick<T,K>`](#Pick<T,K>) 从`T`中过滤出属性`K`
  - [`Record<T,K>`](#Record<T,K>)
  - [`Exclude<T,U>`](#Exclude<T,U>)
  - [`Extract<T,U>`](#Extract<T,U>)
  - [`NonNullable<T>`](#NonNullable<T>)
  - [`ReturnType`](#ReturnType<T>)
  - [`InstanceType`](#InstanceType<T>)
  - [`Required<T>`](#requiredt) 将`T`中所有的属性设为必填

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

### `Exclude<T,U>`

从`T`可分配给的类型中提取`U`, 内置版本v2.8。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: 'a' | 'c'
  Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  ```
</details>

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