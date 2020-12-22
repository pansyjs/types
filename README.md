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

### 内置类型
- [`Partial<T>`](#Partial<T>)
- [`Required<T>`](#Required<T>)
- [`Exclude<T,U>`](#Exclude<T,U>)
- [`Extract<T,U>`](#Extract<T,U>)
- [`NonNullable<T>`](#NonNullable<T>)
- [`ReturnType`](#ReturnType<T>)
- [`InstanceType`](#InstanceType<T>)

### Basic


## API

### Partial<T> 

将`T`中所有的属性设为可选

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

### Required<T> 

将`T`中所有的属性设为必填

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

### Exclude<T,U>

从`T`可分配给的类型中排除`U`, 内置版本 `v2.8`。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: 'b' | 'd'
  Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  ```
</details>

### Exclude<T,U>

从`T`可分配给的类型中提取`U`, 内置版本 `v2.8`。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: 'a' | 'c'
  Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
  ```
</details>

### NonNullable<T>

从`T`中排除`null`和`undefined`, 内置版本 `v2.8`。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: string
  NonNullable<string | null | undefined>;
  ```
</details>

### ReturnType<T>

获取函数类型`T`的返回类型, 内置版本 `v2.8`。

<details>
  <summary>
    示例
  </summary>

  ```ts
  // Expect: string
  ReturnType<() => string>;
  ```
</details>

### InstanceType<T>

获取构造函数类型`T`的实例类型, 内置版本 `v2.8`。

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






