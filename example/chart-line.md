## Code Block: chart line

```chartjs
{
    "type": "line",
    "data": {
        "labels": ["January","February","March","April","May","June"],
        "datasets":[
            {
                "label": "My first dataset",
                "fill": false,
                "lineTension": 0,
                "backgroundColor": "rgba(75,192,192,0.4)",
                "borderColor": "rgba(75,192,192,1)",
                "borderCapStyle": "butt",
                "borderDash": [],
                "borderDashOffset": 0.0,
                "borderJointStyle": "miter",
                "data": [65,59,80,81,56,55]
            }
        ]
    }
}
```

## Another one

```chartjs
{
    "type": "line",
    "data": {
        "label": ["January", "February", "March", "April"],
        "datasets":[
            {
                "label": "Account A",
                "data": [330, 600, 260, 700],
				"backgroundColor": "rgba(24, 58, 183, .5)"
            },
            {
                "label": "Account B",
                "data": [120, 455, 100, 340],
				"backgroundColor": "rgba(200, 58, 32, .5)"
            },
            {
                "label": "Account C",
                "data": [45, 67, 800, 500],
				"backgroundColor": "rgba(20, 200, 20, .5)"
            }
        ]
    }
}
```