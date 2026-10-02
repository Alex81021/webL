import asyncio 

#Define an async function 
async def download_GTA5():
    print("starting download of GTA5...")
    await asyncio.sleep(6) # Simulate waiting
    print("GTA5 download complete!")

async def download_Cyberpunk2077():
    print("starting download of Cyberpunk 2077...")
    await asyncio.sleep(4) # Simulate waiting
    print("Cyberpunk 2077 download complete!")

async def main():
    d = input("press Enter to start downloading ")

    #try:
    try:
    # Start both downloads concurrently
        await asyncio.wait_for(
            asyncio.gather(
                download_GTA5(),
                download_Cyberpunk2077(),
            ), timeout=4.0
        )
    
    except TimeoutError:
            print("⚠️ Gemini took too long to respond! Operation cancelled.")
    except Exception as e:
            print(f"⚠️ An unexpected error occurred: {e}")

# Run the event loop until all tasks are completed
asyncio.run(main())
