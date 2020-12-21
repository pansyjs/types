namespace PackageJson {
  export interface TypeScriptConfiguration {
		/** 捆绑的类型定义的路径 */
		types?: string;
		/** 捆绑的类型定义的路径，types的别名 */
		typings?: string;
  }
  
  export interface PackageJsonStandard {
    /** 包的名称 */
    name?: string;
    /** 包是否私有，如果设置为`true`，则不能发布到npm */
		private?: boolean;
    /** 包的版本 */
    version?: string;
  }
}

export type PackageJson = 
  PackageJson.PackageJsonStandard & 
  PackageJson.TypeScriptConfiguration