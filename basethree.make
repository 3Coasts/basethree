core = 7.x
api = 2

projects[drupal][version] = "7.x"

; Modules
projects[admin][version] = contrib
projects[ctools][subdir] = contrib
projects[devel][subdir] = contrib
projects[less][subdir] = contrib
projects[libraries][subdir] = contrib
projects[menu_block][subdir] = contrib
projects[panels][subdir] = contrib
projects[views][subdir] = contrib

; Themes
projects[tao][version] = "3.0-beta4"

; Modules
projects[basethree_layouts][type] = "module"
projects[basethree_layouts][download][type] = "git"
projects[basethree_layouts][download][url] = "3to@3to.me:git/modules/basethree_layouts.git"

; Themes
projects[basethree][type] = "theme"
projects[basethree][download][type] = "git"
projects[basethree][download][url] = "3to@3to.me:git/themes/basethree.git"

; Libraries
libraries[lessphp][download][type] = "git"
libraries[lessphp][download][url] = "https://github.com/leafo/lessphp.git"
libraries[lessphp][directory_name] = "lessphp"
libraries[lessphp][type] = "library"
