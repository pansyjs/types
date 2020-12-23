import { LiteralUnion } from './literal-union';

namespace PackageJson {
  /** 参与创建或维护程序包的人员 */
  export type Person =
		| string
		| {
			name: string;
			url?: string;
			email?: string;
    };
    
  export type BugsLocation =
  | string
  | {
    /** 程序包问题跟踪器的URL */
    url?: string;
    /** 反馈问题的邮箱地址 */
    email?: string;
  };

  export type Dependency = Record<string, string>;

  export interface TypeScriptConfiguration {
		/** 捆绑的类型定义的路径 */
		types?: string;
		/** 捆绑的类型定义的路径，types的别名 */
		typings?: string;
  }

  type WorkspacePattern = string;

  export interface WorkspaceConfig {
    packages?: WorkspacePattern[];
    nohoist?: WorkspacePattern[];
  }

  export interface YarnConfiguration {
    workspaces?: WorkspacePattern[] | WorkspaceConfig;
    flat?: boolean;
    resolutions?: Dependency;
  }

  export interface DirectoryLocations {
		[directoryType: string]: unknown;
		bin?: string;
		doc?: string;
		example?: string;
		lib?: string;
		man?: string;
		test?: string;
	}

  export type Scripts = {
		prepublish?: string;
		prepare?: string;
		prepublishOnly?: string;
		prepack?: string;
		postpack?: string;
		publish?: string;
		postpublish?: string;
		preinstall?: string;
		install?: string;
		postinstall?: string;
		preuninstall?: string;
		uninstall?: string;
		postuninstall?: string;
		preversion?: string;
		version?: string;
		postversion?: string;
		pretest?: string;
		test?: string;
		posttest?: string;
		prestop?: string;
		stop?: string;
		poststop?: string;
		prestart?: string;
		start?: string;
		poststart?: string;
		prerestart?: string;
		restart?: string;
		postrestart?: string;
	} & Record<string, string>;

  export interface NonStandardEntryPoints {
    module?: string;
    esnext?:
      | string
      | {
        [moduleName: string]: string | undefined;
        main?: string;
        browser?: string;
      };
    browser?:
		  | string
      | Record<string, string | false>;
    sideEffects?: boolean | string[];
  }

  export type ExportCondition = LiteralUnion<
    | 'import'
    | 'require'
    | 'node'
    | 'deno'
    | 'browser'
    | 'electron'
    | 'react-native'
    | 'default',
    string
  >;

  export type Exports =
    | string
    | {[key in ExportCondition]: Exports}
    | {[key: string]: Exports}; // eslint-disable-line @typescript-eslint/consistent-indexed-object-style
  
  export interface PackageJsonStandard {
    /** 包的名称 */
    name?: string;
    /** 包是否私有，如果设置为`true`，则不能发布到npm */
		private?: boolean;
    /** 包的版本 */
    version?: string;
    /** 包的描述 */
    description?: string;
    /** 包的关键字 */ 
    keywords?: string[];
    /** BUG反馈 */
    bugs?: BugsLocation;
    /** 包的许可协议 */
    license?: string;
    /** 包的许可协议 */
    licenses?: Array<{
			type?: string;
			url?: string;
    }>;
    /** 包的作者 */
    author?: Person;
    /** 对该软件包做出贡献的人员列表 */
    contributors?: Person[];
    /** 维护软件包的人员列表 */
    maintainers?: Person[];
    /** 包包含的文件 */
    files?: string[];
    type?: 'module' | 'commonjs';
    /** 应该安装在`PATH`中的可执行文件 */
    bin?:
      | string
      | Record<string, string>;
    man?: string | string[];
    exports?: Exports;
    directories?: DirectoryLocations;
    repository?:
      | string
      | {
        type: string;
        url: string;
        directory?: string;
      };
    scripts?: Scripts;
    config?: Record<string, unknown>;
    /** 包的依赖 */
    dependencies?: Dependency;
    /** 使用此包需要安装的依赖项 */
    peerDependencies?: Dependency;
    /** 包的开发依赖 */
    devDependencies?: Dependency;
    /** 如果无法安装依赖项，将跳过这些依赖项。 */
    optionalDependencies?: Dependency;
    peerDependenciesMeta?: Record<string, {optional: true}>;
    /** 发布软件包时捆绑的软件包名称 */
    bundledDependencies?: string[];
    /** bundledDependencies的别名 */
    bundleDependencies?: string[];
    /** 程序包运行的引擎 */
    engines?: {
			[EngineName in 'npm' | 'node' | string]: string;
		};
    engineStrict?: boolean;
    /** 模块运行的操作烯烃 */
    os?: Array<LiteralUnion<
		| 'aix'
		| 'darwin'
		| 'freebsd'
		| 'linux'
		| 'openbsd'
		| 'sunos'
		| 'win32'
		| '!aix'
		| '!darwin'
		| '!freebsd'
		| '!linux'
		| '!openbsd'
		| '!sunos'
		| '!win32',
		string
		>>;
    /** 模块运行的CPU架构。 */
		cpu?: Array<LiteralUnion<
		| 'arm'
		| 'arm64'
		| 'ia32'
		| 'mips'
		| 'mipsel'
		| 'ppc'
		| 'ppc64'
		| 's390'
		| 's390x'
		| 'x32'
		| 'x64'
		| '!arm'
		| '!arm64'
		| '!ia32'
		| '!mips'
		| '!mipsel'
		| '!ppc'
		| '!ppc64'
		| '!s390'
		| '!s390x'
		| '!x32'
		| '!x64',
		string
		>>;
    /** 如果设置为true，则在本地安装会显示警告，适用于全局安装的命令行应用程序 */
    preferGlobal?: boolean;
    /** 发布的配置 */
    publishConfig?: {
      access: 'restricted' | 'public';
      registry: string;
      [key: string]: unknown;
    };
  }
}

/** 
 * npm package.json 的类型定义，还包括一些常用的其他字段类型TypeScript、Yarn、...
 * https://docs.npmjs.com/creating-a-package-json-file  
 * */
export type PackageJson = 
  PackageJson.PackageJsonStandard & 
  PackageJson.NonStandardEntryPoints &
  PackageJson.TypeScriptConfiguration & 
  PackageJson.YarnConfiguration