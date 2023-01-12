```php
<?php

namespace AshBaker;

class About extends Me
{
    public function getCurrentWorkplace()
    {
        return [
            'workplace' => [
                'company' => 'Qquicker',
                'position' => 'Product Owner'         
            ]
        ];
    }

    public function getDailyKnowledge()
    {
        return [
            Php::class,
            Javascript::class,
            Laravel::class,
            Vuejs::class,
            Angular::class,
            ReactNative::class,
            TailwindCss::class,
            Aws::class,
        ];
    }

    public function getFutureGoal()
    {
        return 'To contribute to open source.';
    }
}
```

-----
Credits: [ashbakernz](https://github.com/ashbakernz)

Last Edited on: 30/08/2020