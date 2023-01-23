// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Quickstarts",
      link: { type: "doc", id: "getting-started/overview" },
      items: [
        "getting-started/local-development",
        {
          type: "category",
          label: "Login",
          items: [
            "getting-started/integrate-auth/go",
            "getting-started/integrate-auth/php",
            "getting-started/integrate-auth/expressjs",
            "getting-started/integrate-auth/nextjs",
            "getting-started/integrate-auth/flutter-web-redirect",
            "getting-started/integrate-auth/react",
            "getting-started/integrate-auth/vue",
            "getting-started/integrate-auth/react-native",
            "getting-started/integrate-auth/dotnet",
          ],
        },
        {
          type: "category",
          label: "OAuth2 / OpenID",
          items: [
            "getting-started/ory-network-oauth2",
            "getting-started/oauth2-openid/expressjs",
          ],
        },
        "guides/permissions/overview",
      ],
    },
    {
      type: "category",
      label: "Identities and sessions",
      items: [
        "identities/native-browser",
        "security-model",
        {
          type: "category",
          label: "Sign-in and registration",
          items: [
            {
              type: "category",
              label: "Passwordless",
              items: [
                {
                  type: "autogenerated",
                  dirName: "kratos/passwordless",
                },
              ],
            },
            {
              type: "category",
              label: "Password",
              items: ["kratos/concepts/credentials/username-email-password"],
            },
            {
              type: "category",
              label: "Social sign-in",
              items: [
                "kratos/social-signin/overview",
                {
                  "Integrating providers": [
                    "kratos/social-signin/generic",
                    "kratos/social-signin/google",
                    "kratos/social-signin/facebook",
                    "kratos/social-signin/microsoft",
                    "kratos/social-signin/github",
                    "kratos/social-signin/apple",
                    "kratos/social-signin/gitlab",
                    "kratos/social-signin/auth0",
                    "kratos/social-signin/slack",
                    "kratos/social-signin/spotify",
                    "kratos/social-signin/discord",
                    "kratos/social-signin/twitch",
                    "kratos/social-signin/netid",
                    "kratos/social-signin/yandex",
                    "kratos/social-signin/vk",
                    "kratos/social-signin/dingtalk",
                    "kratos/social-signin/lark",
                    "kratos/social-signin/patreon",
                  ],
                },
                "kratos/social-signin/get-tokens",
                "kratos/social-signin/data-mapping",
                "kratos/social-signin/account-linking",
              ],
            },
            "identities/sign-in/check-session",
            "identities/sign-in/actions",
          ],
        },
        {
          type: "category",
          label: "Identity model",
          items: [
            "kratos/manage-identities/overview",
            "kratos/manage-identities/identity-schema",
            "identities/model/manage-identity-schema",
            "kratos/manage-identities/customize-identity-schema",
            "kratos/manage-identities/best-practices",
          ],
        },
        {
          type: "category",
          label: "Manage identities",
          items: [
            "kratos/manage-identities/create-users-identities",
            "kratos/manage-identities/import-user-accounts-identities",
            "identities/model/identity-state",
            "kratos/manage-identities/managing-users-identities-metadata",
            "kratos/manage-identities/account-recovery",
          ],
        },
        "kratos/self-service/flows/user-logout",
        "kratos/self-service/flows/verify-email-account-activation",
        "kratos/self-service/flows/account-recovery-password-reset",
        {
          type: "category",
          label: "Managing sessions",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/session-management",
            },
          ],
        },
        {
          type: "category",
          label: "Bring your own UI",
          items: [
            "concepts/custom-ui-basic-integration",
            "concepts/custom-ui-advanced-integration",
            "kratos/concepts/ui-user-interface",
            "guides/bring-your-user-interface",
            "getting-started/custom-ui-ory-elements",
          ],
        },
        "concepts/redirects",
        {
          type: "category",
          label: "Multi-factor authentication (MFA)",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/mfa",
            },
          ],
        },
        {
          type: "category",
          label: "Sending emails",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/emails-sms",
            },
          ],
        },
        {
          Concepts: [
            "kratos/concepts/browser-redirect-flow-completion",
            {
              label: "Identity Credentials",
              type: "category",
              items: ["kratos/concepts/credentials"],
            },
          ],
        },
        {
          label: "Self-service user flows",
          type: "category",
          items: [
            "kratos/self-service",
            "kratos/self-service/flows/user-registration",
            "kratos/self-service/flows/user-login",
            "kratos/self-service/flows/user-settings",
            "kratos/self-service/flows/user-facing-errors",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "OAuth2 and OpenID Connect",
      items: [
        "hydra/index",
        {
          Concepts: [
            "hydra/concepts/before-oauth2",
            "hydra/concepts/oauth2",
            "hydra/concepts/openid-connect-oidc",
            "hydra/concepts/login",
            "hydra/concepts/consent",
            "hydra/concepts/logout",
            "hydra/jwks",
            "hydra/limitations",
          ],
        },
        {
          Guides: [
            "hydra/guides/common-oauth2-openid-connect-flows",
            "hydra/guides/oauth2-public-spa-mobile",
            "hydra/guides/oauth2-clients",
            "hydra/guides/using-oauth2",
            {
              type: "category",
              label: "Implement user interface",
              items: [
                "hydra/guides/custom-ui-oauth2",
                "hydra/guides/login",
                "hydra/guides/consent",
                "hydra/guides/logout",
              ],
            },
            {
              type: "category",
              label: "Configuration",
              items: [
                "hydra/guides/client-token-expiration",
                "hydra/guides/cookies",
                "hydra/guides/cors",
              ],
            },
            {
              type: "category",
              label: "Advanced usage",
              items: [
                {
                  "Advanced flows": [
                    "hydra/guides/openid",
                    "hydra/guides/jwt",
                    "hydra/guides/audiences",
                  ],
                },
                "hydra/guides/openid-connect-dynamic-client-registration",
                "hydra/guides/oauth2-token-introspection",
                "hydra/guides/claims-at-refresh",
              ],
            },
          ],
        },
        {
          "Debug and Help": [
            "hydra/debug",
            "hydra/debug/csrf",
            "hydra/debug/token-endpoint-auth-method",
            "hydra/debug/logout",
            "hydra/faq",
          ],
        },
        {
          "Further Reading": [
            "hydra/case-study",
            "hydra/benchmark",
            "hydra/security-architecture",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Permissions and relationships",
      items: [
        "keto/index",
        "keto/modeling/create-permission-model",
        {
          Concepts: [
            "keto/concepts/relation-tuples",
            "keto/concepts/namespaces",
            "keto/concepts/objects",
            "keto/concepts/subjects",
            "keto/concepts/graph-of-relations",
            "keto/concepts/api-overview",
          ],
        },
        {
          Guides: [
            "keto/guides/simple-access-check-guide",
            "keto/guides/list-api-display-objects",
            "keto/guides/expand-api-display-who-has-access",
            "keto/guides/rbac",
          ],
        },
        {
          Examples: ["keto/examples/olymp-file-sharing"],
        },
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: [
        "kratos/hooks/configure-hooks",
        "guides/integrate-with-ory-cloud-through-webhooks",
        "actions/session",
        "actions/revoke-active-sessions",
        "actions/require-verified-address",
        {
          type: "category",
          label: "CRM Integrations",
          items: [
            "actions/integrations/mailchimp",
            "actions/integrations/hubspot",
          ],
        },
        {
          type: "category",
          label: "Analytics Integrations",
          items: ["actions/integrations/segment"],
        },
      ],
    },
    {
      type: "category",
      label: "Ory CLI",
      items: [
        {
          type: "autogenerated",
          dirName: "guides/cli",
        },
        {
          Reference: [
            {
              type: "autogenerated",
              dirName: "cli",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Migrating to Ory",
      items: [
        "hydra/self-hosted/migrating-from-mitreid",
        "migrate-to-ory/auth0",
      ],
    },
    {
      type: "category",
      label: "From dev to prod",
      items: ["guides/custom-domains"],
    },
    {
      type: "category",
      label: "Open source",
      items: [
        "open-source",
        "open-source/commitment",
        "ecosystem/community",
        "ecosystem/contributing",
        "ecosystem/software-architecture-philosophy",
        {
          type: "category",
          label: "Guidelines",
          items: ["open-source/guidelines/rest-api-guidelines"],
        },
      ],
    },
    {
      type: "category",
      label: "Security and compliance",
      items: [
        "ecosystem/security",
        "kratos/concepts/security",
        "concepts/password-policy",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        {
          type: "autogenerated",
          dirName: "troubleshooting",
        },
      ],
    },
    {
      type: "category",
      label: "Upgrade guides",
      items: [
        {
          type: "autogenerated",
          dirName: "guides/upgrade",
        },
      ],
    },
  ],
  selfhosting: [
    "ecosystem/projects",
    "self-hosted/examples",
    "ecosystem/roadmap",
    "ecosystem/changelog",
    "ecosystem/versioning",
    "ecosystem/configuring",
    "ecosystem/deployment",
    "ecosystem/upgrading",
    "ecosystem/logging",
    "ecosystem/sqa",
    "ecosystem/community",
    {
      type: "category",
      label: "Projects",
      items: [
        {
          type: "category",
          label: "Ory Kratos",
          items: [
            "kratos/ory-kratos-intro",
            "kratos/install",
            "kratos/quickstart",
            "kratos/guides/docker",
            "kratos/guides/deploy-kratos-example",
            "kratos/guides/upgrade",
            {
              type: "category",
              label: "Configuration",
              items: [
                "kratos/configuring",
                "kratos/reference/configuration-editor",
                "kratos/guides/configuring-cookies",
                "kratos/guides/multi-domain-cookies",
                "self-hosted/kratos/configuration/oidc",
                "self-hosted/kratos/configuration/password",
                "kratos/guides/setting-up-password-hashing-parameters",
                "kratos/guides/setting-up-cors",
                "kratos/self-hosted/mail-courier-selfhosted",
                "kratos/self-hosted/mail-courier-templates",
                "kratos/self-hosted/sms-messages",
                "kratos/self-hosted/account-activation-email-verification",
                "kratos/self-hosted/mfa",
                "kratos/guides/zero-trust-iap-proxy-identity-access-proxy",
                "kratos/guides/multi-tenancy-multitenant",
                "kratos/guides/select-cipher-algorithm",
                "kratos/guides/secret-key-rotation",
                "kratos/guides/high-availability-ha",
                "kratos/guides/https-tls",
                "kratos/guides/tracing",
              ],
            },
            {
              type: "category",
              label: "Troubleshooting",
              items: [
                "kratos/debug/troubleshooting",
                "kratos/debug/csrf",
                "kratos/debug/performance-out-of-memory-password-hashing-argon2",
                "kratos/debug/debug-docker-delve-ory-kratos",
              ],
            },
            {
              type: "category",
              label: "Reference",
              items: [
                "kratos/reference/api",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "kratos/cli",
                    },
                  ],
                },
                {
                  SDK: ["kratos/sdk/overview", "kratos/sdk/go"],
                },
                "kratos/reference/configuration",
                "kratos/reference/json-schema-json-paths",
                "kratos/reference/html-forms",
                "kratos/reference/jsonnet",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ory Hydra",
          items: [
            "hydra/self-hosted/install",
            "hydra/5min-tutorial",
            "hydra/self-hosted/deploy-hydra-example",
            "hydra/self-hosted/upgrade",
            {
              type: "category",
              label: "Configuration",
              items: [
                "hydra/reference/configuration",
                "hydra/reference/configuration-editor",
                "hydra/self-hosted/configure-deploy",
                "hydra/self-hosted/dependencies-environment",
                "hydra/self-hosted/production",
                "hydra/self-hosted/hsm-support",
                "hydra/self-hosted/scaling-hydra",
                "hydra/self-hosted/merge-multiple-db-secrets",
                "hydra/self-hosted/gitlab",
                "hydra/self-hosted/secrets-key-rotation",
                "hydra/self-hosted/kubernetes-helm-chart",
                "hydra/self-hosted/ssl-https-tls",
                "hydra/self-hosted/tracing",
              ],
            },
            {
              type: "category",
              label: "Reference",
              items: [
                "hydra/reference/api",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "hydra/cli",
                    },
                  ],
                },
                {
                  SDK: [
                    {
                      type: "autogenerated",
                      dirName: "hydra/sdk",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ory Keto",
          items: [
            "keto/install",
            "keto/quickstart",
            "keto/guides/production",
            "keto/guides/v0.7-migration",
            "keto/guides/migrating-legacy-policies",
            "keto/guides/upgrade",
            {
              Reference: [
                "keto/reference/rest-api",
                "keto/reference/proto-api",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "keto/cli",
                    },
                  ],
                },
                { SDK: ["keto/sdk/overview", "keto/sdk/go"] },
                "keto/reference/configuration",
                "keto/reference/configuration-editor",
                "keto/reference/ory-permission-language",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ory Oathkeeper",
          items: [
            {
              Introduction: ["oathkeeper/index", "oathkeeper/install"],
            },
            {
              "Core Concepts": [
                "oathkeeper/api-access-rules",
                {
                  type: "category",
                  label: "Handlers",
                  items: [
                    "oathkeeper/pipeline",
                    "oathkeeper/pipeline/authn",
                    "oathkeeper/pipeline/authz",
                    "oathkeeper/pipeline/mutator",
                    "oathkeeper/pipeline/error",
                  ],
                },
                "oathkeeper/grpc-middleware",
              ],
            },
            {
              Guides: [
                "oathkeeper/configure-deploy",
                "oathkeeper/guides/proxy-websockets",
                "oathkeeper/guides/traefik-proxy-integration",
                "oathkeeper/guides/upgrade",
              ],
            },
            "oathkeeper/reference/api",
            {
              Reference: [
                "oathkeeper/reference/configuration",
                "oathkeeper/reference/configuration-editor",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "oathkeeper/cli",
                    },
                  ],
                },
                "oathkeeper/sdk",
              ],
            },
          ],
        },
      ],
    },
  ],
  api: [
    "api/index",
    "concepts/personal-access-token",
    "ecosystem/api-design",
    "concepts/cache",
    "reference/api",
  ],
  sdk: [
    "sdk",
    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "category",
          label: "Ory Identities",
          items: ["kratos/sdk/go"],
        },
        {
          type: "category",
          label: "Ory Permissions",
          items: ["keto/sdk/go"],
        },
        {
          type: "category",
          label: "Ory OAuth2 & OpenID",
          items: ["hydra/sdk/go", "hydra/sdk/js", "hydra/sdk/php"],
        },
      ],
    },
  ],
}
