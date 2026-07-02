// まぐまぐストア デモ 共通スクリプト
document.addEventListener('DOMContentLoaded', function () {

  // ---- 代理ログインモード（?proxy=1 が付いたクリエイター画面にバナー表示） ----
  var params = new URLSearchParams(location.search);
  if (params.get('proxy') === '1' && document.body.classList.contains('creator')) {
    var bar = document.createElement('div');
    bar.className = 'proxy-bar';
    bar.innerHTML = '🛡️ 運営スタッフ（山下）として<b>代理操作中</b>です。この画面での操作はすべて操作ログに記録されます。' +
      '<a href="admin-logs.html">操作ログを見る</a><a href="admin-creators.html">代理ログインを終了</a>';
    document.body.prepend(bar);
    // クリエイター画面内のリンクに proxy=1 を引き継ぐ
    document.querySelectorAll('a[href^="creator-"]').forEach(function (a) {
      var href = a.getAttribute('href');
      a.setAttribute('href', href + (href.indexOf('?') >= 0 ? '&' : '?') + 'proxy=1');
    });
  }

  // ---- 人名クリックでクリエイターページへ（商品カード内でも使えるようにリンクと分離） ----
  document.querySelectorAll('.c-jump').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      location.href = 'creator.html?c=' + el.dataset.c;
    });
  });

  // ---- タブ切替 ----
  document.querySelectorAll('[data-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = btn.closest('.tabs-wrap') || document;
      group.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.toggle('active', b === btn); });
      group.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.toggle('active', p.id === btn.dataset.tab); });
    });
  });

  // ---- 予約枠の選択 ----
  document.querySelectorAll('.slot').forEach(function (s) {
    if (s.classList.contains('slot-off')) return;
    s.addEventListener('click', function () {
      document.querySelectorAll('.slot').forEach(function (x) { x.classList.remove('selected'); });
      s.classList.add('selected');
      var picked = document.getElementById('picked-slot');
      if (picked) picked.textContent = s.dataset.label || s.textContent;
      var go = document.getElementById('go-next');
      if (go) go.classList.remove('btn-ghost');
    });
  });

  // ---- デモ用の送信ボタン（メッセージを出して遷移） ----
  document.querySelectorAll('[data-demo-submit]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      alert(b.dataset.demoSubmit);
      if (b.dataset.demoNext) location.href = b.dataset.demoNext;
    });
  });
});
