import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  //urlの末尾に#をつけない
  usePathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '崎山圭のホームページ',
      theme: ThemeData(
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    const defSizeBox = SizedBox(height: 16);
    const defBoldTextStyle = TextStyle(
        color: Colors.black, fontSize: 16, fontWeight: FontWeight.bold);

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("images/name.png"),
            // fit: BoxFit.cover,
            repeat: ImageRepeat.repeat,
          ),
        ),
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(32, 64, 32, 32),
            child: Column(
              children: [
                const Center(
                  child: Text(
                    '崎山圭のホームページ',
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      flex: 1,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Image.asset(
                            'images/me.png',
                            // fit: BoxFit.cover,
                          ),
                          defSizeBox,
                          Padding(
                            padding: const EdgeInsets.fromLTRB(8, 0, 0, 0),
                            child: Column(
                              children: [
                                RichText(
                                  text: TextSpan(
                                    children: [
                                      const TextSpan(
                                        text: """
      崎山 圭(さきやま けい)
      生年月日: 1981年8月14日
      血液型: O型
      """,
                                        style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 16,
                                          height: 2.0,
                                        ),
                                      ),
                                      TextSpan(
                                        text: 'プロフィール',
                                        style: const TextStyle(
                                          color: Colors.blue,
                                          fontSize: 16,
                                          height: 2.0,
                                        ),
                                        recognizer: TapGestureRecognizer()
                                          ..onTap = () async {
                                            final uri = Uri.parse(
                                                "https://www.twitter.com/sakiyamaK");
                                            await launchUrl(uri);
                                          },
                                      )
                                    ],
                                  ),
                                )
                              ],
                            ),
                          ),
                          defSizeBox,
                          defSizeBox,
                          const Text(
                            """
if you have any enquiries 
regarding my development schedule, 
or would like to make an enquiry concerning future 
projects, please do not hesitate to contact me through 
the following twitter account.
""",
                            style: TextStyle(
                              color: Colors.black,
                              fontSize: 16,
                              height: 1.2,
                            ),
                          ),
                          defSizeBox,
                          RichText(
                            text: TextSpan(
                              children: [
                                const TextSpan(
                                  text: "twitter: ",
                                  style: TextStyle(color: Colors.black),
                                ),
                                TextSpan(
                                  text: "@sakiyamaK",
                                  style: const TextStyle(
                                    color: Colors.blue,
                                    fontSize: 16,
                                  ),
                                  recognizer: TapGestureRecognizer()
                                    ..onTap = () async {
                                      final uri = Uri.parse(
                                          "https://www.twitter.com/sakiyamaK");
                                      await launchUrl(uri);
                                    },
                                ),
                              ],
                            ),
                          ),
                          defSizeBox,
                          RichText(
                            text: TextSpan(
                              children: [
                                const TextSpan(
                                  text: "github: ",
                                  style: TextStyle(color: Colors.black),
                                ),
                                TextSpan(
                                  text: "@sakiyamaK",
                                  style: const TextStyle(
                                    color: Colors.blue,
                                    fontSize: 16,
                                  ),
                                  recognizer: TapGestureRecognizer()
                                    ..onTap = () async {
                                      final uri = Uri.parse(
                                          "https://github.com/sakiyamaK");
                                      await launchUrl(uri);
                                    },
                                ),
                              ],
                            ),
                          ),
                          defSizeBox,
                          defSizeBox,
                          defSizeBox,
                          const Text(
                            """
所属:
働きたくない
都内某所
""",
                            style: TextStyle(
                              color: Colors.black,
                              fontSize: 16,
                              height: 1.2,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(
                      width: 10,
                    ),
                    Expanded(
                      flex: 1,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            """
★★★　最新情報　★★★


                          """,
                            style: defBoldTextStyle,
                            textAlign: TextAlign.center,
                          ),
                          const Divider(
                            height: 1,
                          ),
                          defSizeBox,
                          const Text(
                            """ 
・Flutter

  - Flutter Webで「崎山圭のホームページ」を公開しました
""",
                            style: defBoldTextStyle,
                            textAlign: TextAlign.start,
                          ),
                          const Divider(
                            height: 1,
                          ),
                          defSizeBox,
                          const Text(
                            """ 
・iOS
""",
                            style: defBoldTextStyle,
                            textAlign: TextAlign.start,
                          ),
                          RichText(
                            text: TextSpan(
                              children: [
                                const TextSpan(
                                  text: "  - UIKitのままレイアウトのみ宣言的に書けるライブラリ「",
                                  style: defBoldTextStyle,
                                ),
                                TextSpan(
                                  text: "DeclarativeUIKit",
                                  style: const TextStyle(
                                    color: Colors.blue,
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  recognizer: TapGestureRecognizer()
                                    ..onTap = () async {
                                      final uri = Uri.parse(
                                          "https://github.com/sakiyamaK/DeclarativeUIKit");
                                      await launchUrl(uri);
                                    },
                                ),
                                const TextSpan(
                                  text: "」を公開しました",
                                  style: defBoldTextStyle,
                                ),
                              ],
                            ),
                          ),
                          defSizeBox,
                          const Divider(
                            height: 1,
                          ),
                          defSizeBox,
                          const Text(
                            """ 
・プログラミング講師
""",
                            style: defBoldTextStyle,
                            textAlign: TextAlign.start,
                          ),
                          RichText(
                            text: const TextSpan(
                              children: [
                                TextSpan(
                                  text:
                                      "  - 都内某所のプログラミング専門学校でiOSプログラミング講師を9ヶ月やりました",
                                  style: defBoldTextStyle,
                                ),
                              ],
                            ),
                          ),
                          RichText(
                            text: TextSpan(
                              children: [
                                TextSpan(
                                  children: [
                                    const TextSpan(
                                      text: "  - 主に土日の個人指導により３年で",
                                      style: defBoldTextStyle,
                                    ),
                                    TextSpan(
                                      text: " プログラミング未経験の文系7人をiOSエンジニアとして内定が出る",
                                      style: const TextStyle(
                                        color: Colors.blue,
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      recognizer: TapGestureRecognizer()
                                        ..onTap = () async {
                                          final uri = Uri.parse(
                                              "https://note.com/sakiyamak/n/nfa1354fc624b");
                                          await launchUrl(uri);
                                        },
                                    ),
                                    const TextSpan(
                                      text: "まで指導しました",
                                      style: defBoldTextStyle,
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          defSizeBox,
                          const Divider(
                            height: 1,
                          ),
                          defSizeBox,
                          const Text(
                            """ 
・コンピュータサイエンス
""",
                            style: defBoldTextStyle,
                            textAlign: TextAlign.start,
                          ),
                          RichText(
                            text: TextSpan(
                              children: [
                                const TextSpan(
                                  text: "  - 画像処理分野で",
                                  style: defBoldTextStyle,
                                ),
                                TextSpan(
                                  text: "コンピュータサイエンスの博士号",
                                  style: const TextStyle(
                                    color: Colors.blue,
                                    fontSize: 16,
                                  ),
                                  recognizer: TapGestureRecognizer()
                                    ..onTap = () async {
                                      final uri = Uri.parse(
                                          "https://www.osakafu-u.ac.jp/research/active/thesis/h21/");
                                      await launchUrl(uri);
                                    },
                                ),
                                const TextSpan(
                                  text: "を取得しました",
                                  style: TextStyle(color: Colors.black),
                                ),
                              ],
                            ),
                          ),
                          defSizeBox,
                          const Divider(
                            height: 1,
                          ),
                          defSizeBox,
                          const Text(
                            """
当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。
また、まとめサイト等への引用を厳禁致します。
お問い合わせはTwitterのDMでご連絡をお願い致します。
""",
                            style: defBoldTextStyle,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
