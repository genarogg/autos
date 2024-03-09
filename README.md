# COSECA AIS

<h4>Sistema para la Gestión y Control del seguiento del Servicio Comunitario en el Área de Ingeniería de Sistemas UNERG. </h4>

- 1.1  Instalación de **WSL** [DOCS](https://learn.microsoft.com/es-es/windows/wsl/install)

- 1.2  Instalación de la distribución: para este ejemplo se utilizó Ubuntu 22.04.3 LTS [DOCS](https://www.microsoft.com/store/productId/9PDXGNCFSCZV?ocid=pdpshare)

- 1.3  Instalar **Docker** tanto en Windows como en Linux (WSL) [DOCS](https://docs.docker.com/engine/install/ubuntu/)
    
    <details>
    <summary>Instalación de Docker</summary>

    ```bash
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl * * software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    docker --version
    ```
    </details>
    
    **NOTA** Asegúrate de que la opción "Enable integration with my default WSL distro" (Habilitar integración con mi distro WSL predeterminada) esté seleccionada.
  
    Docker Desktop (Windows) > Configuración > Resources > Enable integration with my default WSL distro.

- 1.4  Instalación de **DDEV** tanto en Windows como en Linux (WSL), puedes consultar [DOCS](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) para instalarlo en el sistema operativo que estés usando.

    <details>
    <summary>Instalación de DDEV</summary>

    ```bash
    sudo sh -c 'echo ""'
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://pkg.ddev.com/apt/gpg.key | gpg --dearmor |
    sudo tee /etc/apt/keyrings/ddev.gpg > /dev/null
    sudo chmod a+r /etc/apt/keyrings/ddev.gpg
    sudo sh -c 'echo ""' && echo "deb [signed-by=/etc/apt/keyrings/ddev.gpg] https://pkg.ddev.com/apt/ * *" |
    sudo tee /etc/apt/sources.list.d/ddev.list >/dev/null && sudo sh -c 'echo ""'
    sudo apt update
    sudo apt install -y ddev
    ```
    </details>

**Llegados a este punto ya tienes tu entorno de desarrollo configurado (recomendamos reiniciar la pc), sin embargo aún toca configurar algunas cosas del proyecto**

- 2.1   Instalar las dependencias

    ```bash
        ddev exec composer install
    ```

- 2.2   Configurar los **assets** de nuestra aplicación correctamente, para ello ejecutamos:

    ```bash
        ddev exec bin/cake cakelte install
    ```

- 2.3   Configurar **Migraciones y BasicSeeds**

    ```bash
        ddev exec bin/cake migrations migrate
        ddev exec composer reset-factory-faker
    ```

- 2.4   Podrás acceder a la URL generada después de ejecutar **ddev start** para iniciar sesión, si deseas saber la URL de un sitio que previamente inicializastes lo puedes hacer con:

    ```bash
        ddev describe
    ```

Credenciales de acceso

  -   **Email:** admin@example.com
  -   **Password:** 1234
