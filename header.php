<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initia-scale=1">
	<meta name=”description” content=”ここにmeta descriptionが入ります”>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/swiper-bundle.min.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/styles.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/styles.scss">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/animation.scss">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/animation.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">
<title>My portfoli 2023</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Montserrat:wght@300;400;700&family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">

<?php wp_head(); ?>
</head>

<body>
  <!-- sp用 -->
  <header class="header sp-header">
    <h3 id="sp-header-site-title" class="site-title sp-header-site-title">
      <a href="#">
        Yuta <br class="pc-only">Kobayashi's<br> Portfolio
      </a>
    </h3>

    <div class="burger" id="show">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="sp-nav-wrap">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-list__item"><a href="#" class="nav-list__link">works</a></li>
          <li class="nav-list__item"><a href="#" class="nav-list__link">about</a></li>
          <li class="nav-list__item"><a href="#" class="nav-list__link">skill</a></li>
          <li class="nav-list__item"><a href="#" class="nav-list__link">service</a></li>
          <li class="nav-list__item"><a href="#" class="nav-list__link">blog</a></li>
        </ul>
      </nav>

      <ul class="sns-list">
        <li class="sns-list__item --twitter --btn-shadow"><a href="" class="sns-list__link"><img src="<?php echo get_template_directory_uri(); ?>/images/twitter.svg" alt=""></a></li>
        <li class="sns-list__item --btn-shadow"><a href=""  class="sns-list__link"><img src="<?php echo get_template_directory_uri(); ?>/images/mail.svg" alt=""></a></li>
      </ul>
    </div>
    <!-- /sp-nav-wrap -->
  </header>
  <!-- sp用 -->