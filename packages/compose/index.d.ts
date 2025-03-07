/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DefinitionsInclude =
  | string
  | {
      path?: StringOrList;
      env_file?: StringOrList;
      project_directory?: string;
    };
export type StringOrList = string | ListOfStrings;
export type ListOfStrings = string[];
export type DefinitionsDevelopment = {
  watch?: {
    ignore?: string[];
    path: string;
    action: "rebuild" | "sync" | "restart" | "sync+restart" | "sync+exec";
    target?: string;
    exec?: DefinitionsServiceHook;
  }[];
} & Development;
export type Command = null | string | string[];
export type ListOrDict =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | number | boolean | null;
    }
  | string[];
export type Development = {
  watch?: {
    ignore?: string[];
    path: string;
    action: "rebuild" | "sync" | "restart" | "sync+restart" | "sync+exec";
    target?: string;
    exec?: DefinitionsServiceHook;
  }[];
} | null;
export type DefinitionsDeployment = {
  mode?: string;
  endpoint_mode?: string;
  replicas?: number | string;
  labels?: ListOrDict;
  rollback_config?: {
    parallelism?: number | string;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number | string;
    order?: "start-first" | "stop-first";
  };
  update_config?: {
    parallelism?: number | string;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number | string;
    order?: "start-first" | "stop-first";
  };
  resources?: {
    limits?: {
      cpus?: number | string;
      memory?: string;
      pids?: number | string;
    };
    reservations?: {
      cpus?: number | string;
      memory?: string;
      generic_resources?: DefinitionsGenericResources;
      devices?: DefinitionsDevices;
    };
  };
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number | string;
    window?: string;
  };
  placement?: {
    constraints?: string[];
    preferences?: {
      spread?: string;
    }[];
    max_replicas_per_node?: number | string;
  };
} & Deployment;
export type DefinitionsGenericResources = {
  discrete_resource_spec?: {
    kind?: string;
    value?: number | string;
  };
}[];
export type DefinitionsDevices = {
  capabilities: ListOfStrings;
  count?: string | number;
  device_ids?: ListOfStrings;
  driver?: string;
  options?: ListOrDict;
}[];
export type Deployment = {
  mode?: string;
  endpoint_mode?: string;
  replicas?: number | string;
  labels?: ListOrDict;
  rollback_config?: {
    parallelism?: number | string;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number | string;
    order?: "start-first" | "stop-first";
  };
  update_config?: {
    parallelism?: number | string;
    delay?: string;
    failure_action?: string;
    monitor?: string;
    max_failure_ratio?: number | string;
    order?: "start-first" | "stop-first";
  };
  resources?: {
    limits?: {
      cpus?: number | string;
      memory?: string;
      pids?: number | string;
    };
    reservations?: {
      cpus?: number | string;
      memory?: string;
      generic_resources?: DefinitionsGenericResources;
      devices?: DefinitionsDevices;
    };
  };
  restart_policy?: {
    condition?: string;
    delay?: string;
    max_attempts?: number | string;
    window?: string;
  };
  placement?: {
    constraints?: string[];
    preferences?: {
      spread?: string;
    }[];
    max_replicas_per_node?: number | string;
  };
} | null;
export type ExtraHosts =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | string[];
    }
  | string[];
export type ServiceConfigOrSecret = (
  | string
  | {
      source?: string;
      target?: string;
      uid?: string;
      gid?: string;
      mode?: number | string;
    }
)[];
export type EnvFile =
  | string
  | (
      | string
      | {
          path: string;
          format?: string;
          required?: boolean | string;
        }
    )[];
export type LabelFile = string | string[];
export type DefinitionsGpus =
  | "all"
  | {
      capabilities?: ListOfStrings;
      count?: string | number;
      device_ids?: ListOfStrings;
      driver?: string;
      options?: ListOrDict;
      [k: string]: unknown;
    }[];
/**
 * This interface was referenced by `PropertiesNetworks`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsNetwork = {
  name?: string;
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    driver?: string;
    config?: {
      subnet?: string;
      ip_range?: string;
      gateway?: string;
      aux_addresses?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: string;
      };
    }[];
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
  };
  external?:
    | boolean
    | string
    | {
        /**
         * @deprecated
         */
        name?: string;
      };
  internal?: boolean | string;
  enable_ipv4?: boolean | string;
  enable_ipv6?: boolean | string;
  attachable?: boolean | string;
  labels?: ListOrDict;
} & Network;
export type Network = {
  name?: string;
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  ipam?: {
    driver?: string;
    config?: {
      subnet?: string;
      ip_range?: string;
      gateway?: string;
      aux_addresses?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: string;
      };
    }[];
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
  };
  external?:
    | boolean
    | string
    | {
        /**
         * @deprecated
         */
        name?: string;
      };
  internal?: boolean | string;
  enable_ipv4?: boolean | string;
  enable_ipv6?: boolean | string;
  attachable?: boolean | string;
  labels?: ListOrDict;
} | null;
/**
 * This interface was referenced by `PropertiesVolumes`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsVolume = {
  name?: string;
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  external?:
    | boolean
    | string
    | {
        /**
         * @deprecated
         */
        name?: string;
      };
  labels?: ListOrDict;
} & Volume;
export type Volume = {
  name?: string;
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  external?:
    | boolean
    | string
    | {
        /**
         * @deprecated
         */
        name?: string;
      };
  labels?: ListOrDict;
} | null;

/**
 * The Compose file is a YAML file defining a multi-containers based application.
 */
export interface Compose {
  /**
   * declared for backward compatibility, ignored.
   */
  version?: string;
  /**
   * define the Compose project name, until user defines one explicitly.
   */
  name?: string;
  /**
   * compose sub-projects to be included.
   */
  include?: DefinitionsInclude[];
  services?: PropertiesServices;
  networks?: PropertiesNetworks;
  volumes?: PropertiesVolumes;
  secrets?: PropertiesSecrets;
  configs?: PropertiesConfigs;
}
export interface PropertiesServices {
  [k: string]: DefinitionsService;
}
/**
 * This interface was referenced by `PropertiesServices`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsService {
  develop?: DefinitionsDevelopment;
  deploy?: DefinitionsDeployment;
  annotations?: ListOrDict;
  attach?: boolean | string;
  build?:
    | string
    | {
        context?: string;
        dockerfile?: string;
        dockerfile_inline?: string;
        entitlements?: string[];
        args?: ListOrDict;
        ssh?: ListOrDict;
        labels?: ListOrDict;
        cache_from?: string[];
        cache_to?: string[];
        no_cache?: boolean | string;
        additional_contexts?: ListOrDict;
        network?: string;
        pull?: boolean | string;
        target?: string;
        shm_size?: number | string;
        extra_hosts?: ExtraHosts;
        isolation?: string;
        privileged?: boolean | string;
        secrets?: ServiceConfigOrSecret;
        tags?: string[];
        ulimits?: Ulimits;
        platforms?: string[];
      };
  blkio_config?: {
    device_read_bps?: BlkioLimit[];
    device_read_iops?: BlkioLimit[];
    device_write_bps?: BlkioLimit[];
    device_write_iops?: BlkioLimit[];
    weight?: number | string;
    weight_device?: BlkioWeight[];
  };
  cap_add?: string[];
  cap_drop?: string[];
  cgroup?: "host" | "private";
  cgroup_parent?: string;
  command?: Command;
  configs?: ServiceConfigOrSecret;
  container_name?: string;
  cpu_count?: string | number;
  cpu_percent?: string | number;
  cpu_shares?: number | string;
  cpu_quota?: number | string;
  cpu_period?: number | string;
  cpu_rt_period?: number | string;
  cpu_rt_runtime?: number | string;
  cpus?: number | string;
  cpuset?: string;
  credential_spec?: {
    config?: string;
    file?: string;
    registry?: string;
  };
  depends_on?:
    | ListOfStrings
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
         */
        [k: string]: {
          restart?: boolean | string;
          required?: boolean;
          condition: "service_started" | "service_healthy" | "service_completed_successfully";
        };
      };
  device_cgroup_rules?: ListOfStrings;
  devices?: (
    | string
    | {
        source: string;
        target?: string;
        permissions?: string;
      }
  )[];
  dns?: StringOrList;
  dns_opt?: string[];
  dns_search?: StringOrList;
  domainname?: string;
  entrypoint?: Command;
  env_file?: EnvFile;
  label_file?: LabelFile;
  environment?: ListOrDict;
  expose?: (string | number)[];
  extends?:
    | string
    | {
        service: string;
        file?: string;
      };
  external_links?: string[];
  extra_hosts?: ExtraHosts;
  gpus?: DefinitionsGpus;
  group_add?: (string | number)[];
  healthcheck?: DefinitionsHealthcheck;
  hostname?: string;
  image?: string;
  init?: boolean | string;
  ipc?: string;
  isolation?: string;
  labels?: ListOrDict;
  links?: string[];
  logging?: {
    driver?: string;
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string | number | null;
    };
  };
  mac_address?: string;
  mem_limit?: number | string;
  mem_reservation?: string | number;
  mem_swappiness?: number | string;
  memswap_limit?: number | string;
  network_mode?: string;
  networks?:
    | ListOfStrings
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
         */
        [k: string]: {
          aliases?: ListOfStrings;
          ipv4_address?: string;
          ipv6_address?: string;
          link_local_ips?: ListOfStrings;
          mac_address?: string;
          driver_opts?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^.+$".
             */
            [k: string]: string | number;
          };
          priority?: number;
        } | null;
      };
  oom_kill_disable?: boolean | string;
  oom_score_adj?: string | number;
  pid?: string | null;
  pids_limit?: number | string;
  platform?: string;
  ports?: (
    | number
    | string
    | {
        name?: string;
        mode?: string;
        host_ip?: string;
        target?: number | string;
        published?: string | number;
        protocol?: string;
        app_protocol?: string;
      }
  )[];
  post_start?: DefinitionsServiceHook[];
  pre_stop?: DefinitionsServiceHook[];
  privileged?: boolean | string;
  profiles?: ListOfStrings;
  pull_policy?: "always" | "never" | "if_not_present" | "build" | "missing";
  read_only?: boolean | string;
  restart?: string;
  runtime?: string;
  scale?: number | string;
  security_opt?: string[];
  shm_size?: number | string;
  secrets?: ServiceConfigOrSecret;
  sysctls?: ListOrDict;
  stdin_open?: boolean | string;
  stop_grace_period?: string;
  stop_signal?: string;
  storage_opt?: {
    [k: string]: unknown;
  };
  tmpfs?: StringOrList;
  tty?: boolean | string;
  ulimits?: Ulimits;
  user?: string;
  uts?: string;
  userns_mode?: string;
  volumes?: (
    | string
    | {
        type: string;
        source?: string;
        target?: string;
        read_only?: boolean | string;
        consistency?: string;
        bind?: {
          propagation?: string;
          create_host_path?: boolean | string;
          recursive?: "enabled" | "disabled" | "writable" | "readonly";
          selinux?: "z" | "Z";
        };
        volume?: {
          nocopy?: boolean | string;
          subpath?: string;
        };
        tmpfs?: {
          size?: number | string;
          mode?: number | string;
        };
      }
  )[];
  volumes_from?: string[];
  working_dir?: string;
}
export interface DefinitionsServiceHook {
  command?: Command;
  user?: string;
  privileged?: boolean | string;
  working_dir?: string;
  environment?: ListOrDict;
}
export interface Ulimits {
  /**
   * This interface was referenced by `Ulimits`'s JSON-Schema definition
   * via the `patternProperty` "^[a-z]+$".
   */
  [k: string]:
    | (number | string)
    | {
        hard: number | string;
        soft: number | string;
      };
}
export interface BlkioLimit {
  path?: string;
  rate?: number | string;
}
export interface BlkioWeight {
  path?: string;
  weight?: number | string;
}
export interface DefinitionsHealthcheck {
  disable?: boolean | string;
  interval?: string;
  retries?: number | string;
  test?: string | string[];
  timeout?: string;
  start_period?: string;
  start_interval?: string;
}
export interface PropertiesNetworks {
  [k: string]: DefinitionsNetwork;
}
export interface PropertiesVolumes {
  [k: string]: DefinitionsVolume;
}
export interface PropertiesSecrets {
  [k: string]: DefinitionsSecret;
}
/**
 * This interface was referenced by `PropertiesSecrets`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsSecret {
  name?: string;
  environment?: string;
  file?: string;
  external?:
    | boolean
    | string
    | {
        name?: string;
        [k: string]: unknown;
      };
  labels?: ListOrDict;
  driver?: string;
  driver_opts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: string | number;
  };
  template_driver?: string;
}
export interface PropertiesConfigs {
  [k: string]: DefinitionsConfig;
}
/**
 * This interface was referenced by `PropertiesConfigs`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsConfig {
  name?: string;
  content?: string;
  environment?: string;
  file?: string;
  external?:
    | boolean
    | string
    | {
        /**
         * @deprecated
         */
        name?: string;
        [k: string]: unknown;
      };
  labels?: ListOrDict;
  template_driver?: string;
}
