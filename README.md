
# Demonstrate how to add prometheus metrics to spring-boot and scape metrics using Prometheus Operator

## Building docker native-image using packer
```shell
pack build --builder paketobuildpacks/builder:base --env 'BP_NATIVE_IMAGE=true' --env BP_JVM_VERSION=17 nontster/echo-micrometer:0.0.2 --publish
```

## Deploy to Kubernetes cluster
```shell
kubectl apply -f ./deploy
```

## Generate load to application using K6
```shell
k6 run ./k6/script.js
```