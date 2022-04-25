# k6-playground

## installation

```
brew install k6
```

## run

Run `kibana_login_with_session` scenario with 10 concurrent users within 30 sec and output to json file:
```
k6 run --vus=10 --duration=30sec --out json=output/results.json kibana_login_with_session.js
```
