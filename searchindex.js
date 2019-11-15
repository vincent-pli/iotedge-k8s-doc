window.search = {"doc_urls":["introduction.html#introduction","examples.html#examples","examples/prereqs.html#prerequisites","examples/prereqs.html#a-kubernetes-cluster","examples/prereqs.html#helm","examples/prereqs.html#kubectl","examples/prereqs.html#visual-studio-code","examples/prereqs.html#visualization-tools-optional"],"index":{"documentStore":{"docInfo":{"0":{"body":120,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":2,"title":1},"3":{"body":44,"breadcrumbs":3,"title":2},"4":{"body":29,"breadcrumbs":2,"title":1},"5":{"body":5,"breadcrumbs":2,"title":1},"6":{"body":15,"breadcrumbs":4,"title":3},"7":{"body":9,"breadcrumbs":4,"title":3}},"docs":{"0":{"body":"Azure IoT Edge can integrate with Kubernetes, using it as a resilient, highly available infrastructure layer. It registers an IoT Edge Custom Resource Definition (CRD) with the Kubernetes API Server and provides a CRD controller that reconciles cloud-managed desired state with the local cluster state. Module lifetime is managed by the Kubernetes scheduler, which maintains module availability and chooses their placement. IoT Edge manages the edge application platform running on top, continuously reconciling the desired state specified in IoT Hub with the state on the edge cluster. The edge application model is still the familiar model based on IoT Edge modules and routes. The IoT Edge agent performs the role of a CRD controller, automatically translating from IoT Edge application model to Kubernetes native constructs like pods, deployments, services etc. 💡 A good mental model for this integration is to think of Kubernetes as another operating environment IoT Edge applications can run on in addition to Linux and Windows. The high level diagram above might help you understand where Kubernetes fits in a typical production IoT Edge architecture.","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Examples","id":"1","title":"Examples"},"2":{"body":"","breadcrumbs":"Tutorials » Prerequisites","id":"2","title":"Prerequisites"},"3":{"body":"A Kubernetes cluster that supports Custom Resource Definitions (CRD) is required for using Azure IoT Edge with Kubernetes. v1.12 or newer is recommended . Here are some options if you don't already have a cluster available: For a managed cluster offering, consider Azure Kubernetes Service (AKS). You can stand one up using the AKS QuickStart instructions. For a local development environment, you can use Minikube or k3d (recommended).","breadcrumbs":"Tutorials » A Kubernetes cluster","id":"3","title":"A Kubernetes cluster"},"4":{"body":"Helm is a package manager for Kubernetes which allows you to install applications, including IoT Edge, into your cluster. Please follow the Helm 2 install insructions . 💣 IoT Edge on Kubernetes has only been tested with Helm 2 at this time. Support for Helm 3 will be added in the future.","breadcrumbs":"Tutorials » Helm","id":"4","title":"Helm"},"5":{"body":"Kubectl is an essential tool for interacting with your cluster.","breadcrumbs":"Tutorials » kubectl","id":"5","title":"kubectl"},"6":{"body":"Visual Studio Code with IoT Edge extension is recommended for working with IoT Edge's deployment manifests and submitting them to IoT Hub.","breadcrumbs":"Tutorials » Visual Studio Code","id":"6","title":"Visual Studio Code"},"7":{"body":"Tools like Octant and K9s can help you understand the architecture and state of your cluster application.","breadcrumbs":"Tutorials » Visualization tools (optional)","id":"7","title":"Visualization tools (optional)"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":3,"docs":{"0":{"tf":2.0},"4":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"df":0,"docs":{}},"z":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"r":{"d":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":4,"docs":{"0":{"tf":3.3166247903554},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"6":{"tf":1.0}},"e":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"p":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"b":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":3.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772}}}}},"k":{"3":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"9":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.449489742783178},"3":{"tf":2.0},"4":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":2.0}}}},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"n":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":2.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"df":1,"docs":{"3":{"tf":1.0}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.7320508075688772}}}},"v":{"1":{".":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"2":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"4":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":3,"docs":{"0":{"tf":2.0},"4":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"df":0,"docs":{}},"z":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.23606797749979},"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"r":{"d":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":4,"docs":{"0":{"tf":3.3166247903554},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"6":{"tf":1.0}},"e":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"t":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":2.449489742783178}}},"p":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"b":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":3.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772}}}}},"k":{"3":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"9":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.449489742783178},"3":{"tf":2.23606797749979},"4":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":2.0}}}},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}}}}},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"n":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":2.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.7320508075688772}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":6,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"df":1,"docs":{"3":{"tf":1.0}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.7320508075688772}}}},"v":{"1":{".":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};