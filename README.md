# Interview Symfony

For this interview you will be recreating an html website and put it into a Symfony application using twig.

https://www.rtenant.com/eviction-reports/ - This is the page you will be recreating

What I will be looking at is more or less the templates you generate. I will be looking at how you use twig and how you structure your templates.

I have added all the required assets to Symfony in /public/(css|js|images)

The html file can be found at: [Eviction Reports assets](https://github.com/realidlabs/interview/tree/master/frontend-1/eviction-reports)


In src/Controller/EvicitionReportController.php you will find the route for the page with an example hero $params to get you started.

The main entrypoint for this template can be found in templates/eviction_report/index.html.twig

This template is pretty barebones and includes an example hero section. You will need to create the rest of the page using twig.


### Requirements
To run this project you will need to install Symfony CLI: https://symfony.com/download

| Command | Description |
| --- | --- |
| `composer install` | Install dependencies |
| `symfony server:start` | Start the web server |

Run the following commands to get started:

```bash
composer install
symfony server:start
```

The web server will be running at:
https://localhost:8000/eviction-report


### Twig Docs

https://twig.symfony.com/doc/3.x/

https://twig.symfony.com/doc/3.x/tags/include.html

https://twig.symfony.com/doc/3.x/tags/for.html


