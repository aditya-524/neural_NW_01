function build(){
    var net = new Net();

    net.addLayer(2);

    net.addLayer(2);
    net.addLayer(2);
  


    net.setInputValues([0.05,0.10])
    net.setOutputValues([0.01, 0.99])

    net.weights[0].setValues([[.15, .20],[.25, .30]])
    net.weights[1].setValues([[.40, 0.45],[.50, 0.55]])

    // net.training = {
    //         "inputs": [ [-4,3] , [2,5] , [1,3]],
    //         "outputs":[[1], [2], [3]]
    // }

    return net;

}
