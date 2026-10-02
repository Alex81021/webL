import asyncio

async def download_GTA5():
    print("Starting download of GTA5...")
    await asyncio.sleep(6)
    print("GTA5 download complete!")

async def download_Cyberpunk2077():
    print("Starting download of Cyberpunk 2077...")
    await asyncio.sleep(4)
    print("Cyberpunk 2077 download complete!")

async def main():
    gta = asyncio.create_task(download_GTA5())
    cyber = asyncio.create_task(download_Cyberpunk2077())

    try:
        await asyncio.wait_for(cyber, timeout=4)
    except asyncio.TimeoutError:
        print("⚠ Cyberpunk timed out!")

    try:
        await asyncio.wait_for(gta, timeout=4)
    except asyncio.TimeoutError:
        print("⚠ GTA5 timed out!")

asyncio.run(main())