import os
import time


os.system('taskkill /f /im git-bash.exe & taskkill /f /im bash.exe & taskkill /f /im chrome.exe & taskkill /f /im xampp-control.exe & taskkill /f /im TeamViewer.exe & taskkill /f /im skype.exe & taskkill /f /im zoom.exe')
time.sleep(3)
os.system('start shutdown.lnk')
time.sleep(2)
os.system('taskkill /f /im code.exe')