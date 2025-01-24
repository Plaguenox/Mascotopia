<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    
    $params = json_decode($json);
    
    $nombre = $params->nombre;
    $nombreArchivo = $params->nombreArchivo;
    $id = $params->id;
    $archivo = $params->base64textString;
    $archivo = base64_decode($archivo);
    
    $filePath = $_SERVER['DOCUMENT_ROOT']."/contenido/splash/".$id."/".$nombre;
    file_put_contents($filePath, $archivo);
    
    
    class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    $response->resultado = 'OK';
    $response->mensaje = 'SE SUBIO EXITOSAMENTE';
    
    header('Content-Type: application/json');
    echo json_encode($response);
?>
