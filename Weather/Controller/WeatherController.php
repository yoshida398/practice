<?php
require '../../Common/Controller/BaseController.php';
require '../Dao/WeatherApiDao.php';
require '../ViewHelper/WeatherViewHelper.php';

class WeatherController extends BaseController
{
    public function __construct() {
        parent::__construct();
        $this->smarty->template_dir = "/Applications/MAMP/htdocs/practice/Weather/";
    }

    public function weatherAction()
    {
        $data = WeatherApiDao::fetchWeather();
        $weatherList = WeatherViewHelper::weatherList($data);

        $this->smarty->assign("weatherList", $weatherList);
        $this->smarty->assign("test", "これはテスト用です");
        $this->smarty->display('weather.tpl');
    }
}

$index = new WeatherController();
$index->weatherAction();