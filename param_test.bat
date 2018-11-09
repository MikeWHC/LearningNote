echo %%0 = %0
echo %%CD%% = %CD%

IF NOT EXIST temp MKDIR temp
CD temp
echo %%0 = %0
echo %%CD%% = %CD%
echo %%~0 = %~0
echo %%~f0 = %~f0
echo %%~d0 = %~d0
echo %%~p0 = %~p0
echo %%~n0 = %~n0
echo %%~x0 = %~x0
echo %%~s0 = %~s0
echo %%~a0 = %~a0
echo %%~t0 = %~t0
echo %%~z0 = %~z0
pause
