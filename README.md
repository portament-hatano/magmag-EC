# まぐまぐストア デモサイト（magmag EC）

「まぐまぐストア 初期リリース要件定義」（requirements_1.md・全36機能）にもとづく画面デモです。
静的HTML/CSSのみで構成され、実際の決済・メール送信・データ保存は行いません。

## 見る場所

- **会議用の全ページ一覧**: [pages.html](pages.html) ← まずここ
- GitHub Pages: https://portament-hatano.github.io/magmag-EC/pages.html

## 構成（全27ページ）

| 区分 | ページ |
|---|---|
| ユーザー（購入前） | index / products / creator（クリエイター本人ページ）/ product-talk / product-archive / reserve / checkout / complete / login |
| ユーザー（購入後） | mypage / library / viewer / receipt / cancel / contact / terms |
| クリエイター | creator-home / creator-profile / creator-items / creator-item-archive / creator-item-talk / creator-bookings / creator-sales |
| 運営管理 | admin-home / admin-approvals / admin-refunds / admin-sales / admin-payout / admin-creators / admin-orders / admin-cs / admin-logs |

## デモの見どころ

1. **購入フロー**: 商品詳細 → 日時選択（枠クリック）→ 決済 → 完了（SNSシェア）
2. **代理ログイン**: admin-creators.html の「代理ログイン」→ クリエイター画面に操作中バナーが出て、admin-logs.html の操作ログと連動（内部統制要件のデモ）
3. **公開の非対称ルール**: creator-items.html（非公開=即時／公開=運営承認後）
4. **検討中の論点（§4の10項目）**: 該当ページに黄色い付箋🔖で明示

## 注意

- 掲載の人物・商品・金額・数値はすべて架空です
- 法務系文面（規約・特商法）は枠のみ（文面は法務が用意する前提・§5）
