@echo off
setlocal
set ROOT_DIR=%~dp0..
cd /d "%ROOT_DIR%"

:: Set environment file flag matching bash behavior
if "%LOOP_CLAW_SKIP_DOTENV%"=="1" (
  set ENV_FILE_FLAG=--env-file=nul
) else if exist .env (
  set ENV_FILE_FLAG=--env-file=.env
) else (
  set ENV_FILE_FLAG=
)

:: Run recovery CLI if forced
if "%CLAUDE_CODE_FORCE_RECOVERY_CLI%"=="1" (
  bun %ENV_FILE_FLAG% ./src/localRecoveryCli.ts %*
) else (
  bun %ENV_FILE_FLAG% ./src/entrypoints/cli.tsx %*
)
