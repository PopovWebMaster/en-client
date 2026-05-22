del C:\OpenServer\domains\en-server\public\assets\css\*.* /q
del C:\OpenServer\domains\en-server\public\assets\js\*.* /q
del C:\OpenServer\domains\en-server\public\assets\img\*.* /q
del C:\OpenServer\domains\en-server\public\assets\fonts\*.* /q
xcopy C:\OpenServer\domains\en-client\dist\assets\css C:\OpenServer\domains\en-server\public\assets\css /f /i /y /s
xcopy C:\OpenServer\domains\en-client\dist\assets\js C:\OpenServer\domains\en-server\public\assets\js /f /i /y /s
xcopy C:\OpenServer\domains\en-client\dist\assets\img C:\OpenServer\domains\en-server\public\assets\img /f /i /y /s
xcopy C:\OpenServer\domains\en-client\dist\assets\fonts C:\OpenServer\domains\en-server\public\assets\fonts /f /i /y /s










