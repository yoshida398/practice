<?php
require_once("Smarty/Smarty.class.php");

class BaseController 
{
    /**
     * @var Smarty
     */
    public $smarty;

    public function __construct() {
        $this->smarty = new Smarty();
        $this->smarty->template_dir = "/Applications/MAMP/htdocs/templates/";
        $this->smarty->compile_dir = "/Applications/MAMP/htdocs/templates_c/";
    }
}