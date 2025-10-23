import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
  /*
   * サーバーサイドの環境変数です。クライアントでは使用できません。
   * クライアントでこれらの変数にアクセスすると例外がスローされます。
   */
  server: {},
  /*
   * クライアント（およびサーバー）で使用可能な環境変数です。
   *
   * 💡 これらの変数の前にNEXT_PUBLIC_を付けないと、型エラーが発生します。
   */
  client: {},
  /*
   * Next.jsはEdgeとClientの環境変数をバンドルするため、
   * すべての環境変数がバンドルされるように、手動で環境変数を再構築する必要があります。
   *
   * 💡 `server` と `client` のすべての変数がここに含まれていないと、型エラーが発生します。
   */
  runtimeEnv: {
    // server
    // client
  },
})
