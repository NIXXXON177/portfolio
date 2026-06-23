# Сборка Florea APK и копия в корень портфолио.
# Запуск из d:\Site-portfolio: .\scripts\build-florea.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$AppDir = Join-Path $Root "MyCycle"
$ApkOut = Join-Path $AppDir "build\app\outputs\flutter-apk\app-release.apk"
$Target = Join-Path $Root "Florea.apk"

if (-not (Test-Path $AppDir)) {
    Write-Error "Не найдена папка MyCycle: $AppDir"
}

Push-Location $AppDir
flutter pub get
flutter build apk --release
Pop-Location

if (-not (Test-Path $ApkOut)) {
    Write-Error "APK не найден: $ApkOut"
}

Copy-Item -Force $ApkOut $Target
$hash = (Get-FileHash $Target -Algorithm SHA256).Hash
$mb = [math]::Round((Get-Item $Target).Length / 1MB, 2)

Write-Host ""
Write-Host "OK: $Target ($mb MB)"
Write-Host "SHA-256: $hash"
Write-Host "Не забудь обновить MyCycle/_release/manifest.json и GitHub Release."
