<!DOCTYPE html>

<html lang="<?php echo e(app()->getLocale()); ?>" class="material-style layout-navbar-fixed">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title>Laravel + Vue.js Starter</title>

    <!-- Main font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet">

    <!-- Icons. Uncomment required icon fonts -->
    <!-- <link rel="stylesheet" href="<?php echo e(mix('/vendor/fonts/fontawesome.css')); ?>"> -->
    <link rel="stylesheet" href="<?php echo e(mix('/vendor/fonts/ionicons.css')); ?>">
    <!-- <link rel="stylesheet" href="<?php echo e(mix('/vendor/fonts/linearicons.css')); ?>"> -->
    <!-- <link rel="stylesheet" href="<?php echo e(mix('/vendor/fonts/open-iconic.css')); ?>"> -->
    <!-- <link rel="stylesheet" href="<?php echo e(mix('/vendor/fonts/pe-icon-7-stroke.css')); ?>"> -->

    <!-- Promises -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>

    <!-- Material ripple -->
    <script src="<?php echo e(mix('/vendor/js/material-ripple.js')); ?>"></script>
    <script>window.attachMaterialRippleOnLoad();</script>

    <!-- Layout helpers -->
    <script src="<?php echo e(mix('/vendor/js/layout-helpers.js')); ?>"></script>

</head>
<body>

    <div id="app"></div>

    <script src="<?php echo e(mix('/entry-point.js')); ?>"></script>

</body>
</html>