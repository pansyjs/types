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
- [`Partial<T>`](#Partial)

### Basic


## API

### Partial 

将T中所有的属性设为可选

<details>
<summary>
  Example
</summary>

```ts
interface NodeConfig {
    appName: string;
    port: number;
}
```
</details>







