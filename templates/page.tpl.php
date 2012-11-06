<div id='header'>
    <div class='container'>
        <div class='grid-12'>
            <?php if ($site_name): ?><h1 class='site-name'><?php print $site_name ?></h1><?php endif; ?>
            <?php if ($page['header']): ?>
                <?php print render($page['header']); ?>
            <?php endif; ?>
        </div>
    </div>
</div>

<div id='menu'>
    <div class='container'>
        <div class='grid-12'>
            <?php if ($page['menu']): ?>
                <?php print render($page['menu']); ?>
            <?php endif; ?>
        </div>
    </div>
</div>


<div id='page'>

    <?php if ($page['help'] || ($show_messages && $messages)): ?>
    <div id='console' class='container'><div class='grid-12'>
        <?php print render($page['help']); ?>
        <?php if ($show_messages && $messages): print $messages; endif; ?>
    </div></div>
    <?php endif; ?>

    <div id='main-content' class='container'>
        <?php print render($title_prefix); ?>
        <h1 id='page-title'><?php print $title; ?></h1>
        <?php print render($title_suffix); ?>
        <?php if ($primary_local_tasks): ?><ul id='primary-tabs' class='links'><?php print render($primary_local_tasks) ?></ul><?php endif; ?>
        <?php if ($secondary_local_tasks): ?><ul id='secondary-tabs' class='links'><?php print render($secondary_local_tasks) ?></ul><?php endif; ?>
        <?php if ($action_links): ?><ul id='action-links' class='links'><?php print render($action_links); ?></ul><?php endif; ?>
        <div id='content'><?php print render($page['content']) ?></div>
    </div>

</div>

<div id="footer">
    <div class='container'>
        <div class='grid-12'>
            <?php if ($page['footer']): ?>
            <?php print render($page['footer']); ?>
            <?php endif; ?>
        </div>
    </div>
</div>
