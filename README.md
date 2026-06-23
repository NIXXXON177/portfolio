# Портфолио — Nick (ISTHISNIXXXON)

Личный сайт-портфолио. Тёмный минимализм, RU/EN, 6 проектов.

Живая версия: https://nixxxon177.github.io/portfolio/

## Florea (мобильное приложение)

Исходники и сборка — локально в папке `MyCycle/` (в git не попадают, см. `.gitignore`).

Репозиторий релизов на GitHub: [NIXXXON177/MyCycle](https://github.com/NIXXXON177/MyCycle)  
Публичное имя приложения: **Florea** (репозиторий исторически `MyCycle`).

### Сборка APK

```powershell
cd MyCycle
flutter pub get
flutter build apk --release
```

Артефакты:

| Файл | Назначение |
|------|------------|
| `MyCycle/build/app/outputs/flutter-apk/app-release.apk` | результат сборки |
| `Florea.apk` (корень сайта) | копия для ручной раздачи / тестов |
| `MyCycle/_release/manifest.json` | манифест для in-app updater |

После сборки:

```powershell
.\scripts\build-florea.ps1
```

или вручную:

```powershell
Copy-Item MyCycle\build\app\outputs\flutter-apk\app-release.apk Florea.apk
```

Обновить `MyCycle/_release/manifest.json` (`versionName`, `versionCode`, `notes`) перед релизом на GitHub.

### Два рабочих копии (не путать)

| Путь | Что там |
|------|---------|
| `d:\Site-portfolio\MyCycle` | Florea **1.8.0**, ребрендинг, сборка для сайта и GitHub Releases |
| `C:\Users\KILLERFICHA_\Desktop\MyCycle` | MyCycle **1.7.5 RC**, ветка `release/1.7.5-rc1`, ожидает валидацию на устройстве |
