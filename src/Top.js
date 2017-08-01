import React, { Component } from 'react';
class Top extends React.Component   {
render() {
  return(
    <html>
  <head>
    <title>AdminLTE 2 | Top Navigation</title>
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="../../bower_components/font-awesome/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="../../bower_components/Ionicons/css/ionicons.min.css"></link>
    <link rel="stylesheet" href="../../dist/css/AdminLTE.min.css"></link>
    <link rel="stylesheet" href="../../dist/css/skins/_all-skins.min.css"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"></link>
  </head>
  <body class="hold-transition skin-blue layout-top-nav">
  <div class="wrapper">

    <header class="main-header">
      <nav class="navbar navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a href="../../index2.html" class="navbar-brand"><b>Admin</b>LTE</a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li class="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
              <div class="form-group">
                <input type="text" class="form-control" id="navbar-search-input" placeholder="Search"></input>
              </div>
          </div>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-envelope-o"></i>
                  <span class="label label-success">4</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 4 messages</li>
                  <li>

                    <ul class="menu">
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"></img>
                          </div>

                          <h4>
                            Support Team
                            <small><i class="fa fa-clock-o"></i> 5 mins</small>
                          </h4>

                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>

                    </ul>

                  </li>
                  <li class="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>

              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-bell-o"></i>
                  <span class="label label-warning">10</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 10 notifications</li>
                  <li>

                    <ul class="menu">
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>

                    </ul>
                  </li>
                  <li class="footer"><a href="#">View all</a></li>
                </ul>
              </li>

              <li class="dropdown tasks-menu">

                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-flag-o"></i>
                  <span class="label label-danger">9</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 9 tasks</li>
                  <li>

                    <ul class="menu">
                      <li>
                        <a href="#">

                          <h3>
                            Design some buttons
                            <small class="pull-right">20%</small>
                          </h3>
                          <div class="progress xs">

                            <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">20% Complete</span>

                            </div>
                          </div>
                        </a>
                      </li>

                    </ul>
                  </li>
                  <li class="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown user user-menu">

                <a href="#" class="dropdown-toggle" data-toggle="dropdown">

                  <img src="../../dist/img/user2-160x160.jpg" class="user-image" alt="User Image"></img>

                  <span class="hidden-xs">Alexander Pierce</span>
                </a>
                <ul class="dropdown-menu">

                  <li class="user-header">
                    <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"></img>

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>

                  <li class="user-body">
                    <div class="row">
                      <div class="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div class="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div class="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>

                  </li>

                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div class="pull-right">
                      <a href="#" class="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="content-wrapper">
      <div class="container">
        <section class="content-header">
          <h1>
            Top Navigation
            <small>Example 2.0</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Layout</a></li>
            <li class="active">Top Navigation</li>
          </ol>
        </section>
        <section class="content">
          <div class="callout callout-info">
            <h4>Tip!</h4>

            <p>Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a
              sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular
              links instead.</p>
          </div>
          <div class="callout callout-danger">
            <h4>Warning!</h4>

            <p>The construction of this layout differs from the normal one. In other words, the HTML markup of the navbar
              and the content will slightly differ than that of the normal layout.</p>
          </div>
          <div class="box box-default">
            <div class="box-header with-border">
              <h3 class="box-title">Blank Box</h3>
            </div>
            <div class="box-body">
              The great content goes here
            </div>

          </div>

        </section>

      </div>

    </div>
    <footer class="main-footer">
      <div class="container">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
        reserved.
      </div>

    </footer>
  </div>

  <script src="../../bower_components/jquery/dist/jquery.min.js"></script>

  <script src="../../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

  <script src="../../bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>

  <script src="../../bower_components/fastclick/lib/fastclick.js"></script>

  <script src="../../dist/js/adminlte.min.js"></script>

  <script src="../../dist/js/demo.js"></script>
  </body>
  </html>
    );
  }
}
export default Top;
