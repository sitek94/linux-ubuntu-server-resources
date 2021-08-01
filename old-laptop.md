# Ubuntu Server on old laptop

I was inspired by [this guy](https://www.youtube.com/watch?v=wFjYzhkEBys) and decided to turn my old laptop into a web server that I could use for learning purposes.

## TODO

- [ ] add diagram with my setup (old laptop as a server, pc for development, router, etc)

## Linux

All my life I've been using Windows and I decided that it'd be nice to try something else. 

* [What is Linux](https://www.linux.com/what-is-linux/)
* [The IBM Linux Commercial from 2003](https://www.youtube.com/watch?v=x7ozaFbqg00)

## Ubuntu Server

As a Linux distribution I've chosen Ubuntu Server. 

* [Download Ubuntu Server distro](https://ubuntu.com/download/server#downloads)
* [Make a USB Boot from a Linux distro](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)
* [Disable Secure Boot](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/disabling-secure-boot) - to boot PC using USB
* [Ubuntu Server 20.04 LTS Install - A Step by Step Guide](https://www.youtube.com/watch?v=xUH256WAWt0)
* [PL: Ubuntu Server #1: Instalacja, konfiguracja po-instalacyjna, ustawienia IP](https://www.youtube.com/watch?v=uNqxUWiAoRk)
* [Ubuntu Server CLI Cheatsheet](https://assets.ubuntu.com/v1/f401c3f4-Ubuntu_Server_CLI_pro_tips_2020-04.pdf)

### After installation

[cc_final_message.py... WARNING: Used fallback datasource](https://askubuntu.com/questions/1321968/ubuntu-server-20-04-2-lts-hangs-after-bootup-cloud-init-1781-yyyy-mm-dd-h)

```
sudo touch /etc/cloud/cloud-init.disabled
```

### Network configuration

The only problem I had with the installation was that my laptop doesn't have an Ethernet Port, so I had to manually enable wifi, which wasn't so straightforward to me.

* [How to enable wifi on Ubuntu Server without a wired Ethernet connection?](https://medium.com/@yping88/how-to-enable-wi-fi-on-ubuntu-server-20-04-without-a-wired-ethernet-connection-42e0b71ca198)
* [Ubuntu - connect to wifi from command line](https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line)
* [Netplan - examples](https://netplan.io/examples/)
* [Netplan - properties references](https://netplan.io/reference/#properties-for-device-type-wifis%3A)

## Remote access via SSH

* [PL: Netia - przekierowanie portu](https://www.netia.pl/pl/srednie-i-duze-firmy/pomoc/produkty/najpopularniejsze/przekierowanie-portu-(port-forwarding)-na-netia-sp)
* [PL: Ubuntu Server #2: Połączenie SSH](https://www.youtube.com/watch?v=4IFEOOqhF9o)
* [How to Access an Ubuntu Server Remotely via SSH](https://www.youtube.com/watch?v=DI3G-TfY1wM)
  * [Configure SSH to use two-factor authentication](https://ubuntu.com/tutorials/configure-ssh-2fa#1-overview)
  * [Set up SSH-key based authentication](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04)

## Local Network, Firewall and Apache2

I spent a lot of time trying to figure out why I can't connect to a simple web server from other machines in my local network. The reason was Microsoft Defender Firewall which was turned on for private network. When I figured that out I was able to host a simple webpage using apache2 on my laptop and then view it on my pc. 

## First NodeJS Server 

* [Installing Node using nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-%E2%80%94-installing-node-using-the-node-version-manager)
* [Setting up a firewall with ufw](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04)
* [Open firewall port on Ubuntu](https://www.cyberciti.biz/faq/how-to-open-firewall-port-on-ubuntu-linux-12-04-14-04-lts/)
* Port forwarding in local network router 
* [Simple server running on port 80](https://github.com/sitek94/linux-ubuntu-server-reference/blob/main/files/server.js)
