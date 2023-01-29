import os
import time

aa = int(input("masukkan jam buat sleep : "))
ll = aa * 3600
kk = ll - 1200

os.system(f'start shutdown -s -t {ll}')

time.sleep(kk)
os.system('taskkill /f /im git-bash.exe && taskkill /f /im bash.exe && taskkill /f /im chrome.exe && taskkill /f /im xampp-control.exe && taskkill /f /im TeamViewer.exe && taskkill /f /im skype.exe && taskkill /f /im zoom.exe && taskkill /f /im notepad.exe')
os.system('taskkill /f /im code.exe')