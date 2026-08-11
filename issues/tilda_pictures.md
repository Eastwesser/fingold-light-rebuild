What I did
Restored every original static.tildacdn.com image reference in the code, exactly as it was in docs/reference/old/Fingold_Light_Rebuild.html, replacing all the locally-generated placeholders:

File	Change
Serve.tsx
4 icons → original Tilda icon URLs
Insights.tsx
2 icons → original Tilda icon URLs
Careers.tsx
3 icons → original Tilda icon URLs
80-careers.css
3 career background photos → original Tilda photo URLs
70-insights.css
Featured-card background photo → original Tilda photo URL
90-team.css + 190-light-theme-final.css
Founder photo texture → original Tilda logo URL (restored in both the base layer and the light-theme override layer, matching the original which had it in both places)
newsData.ts
All 32 news thumbnails → each one's own unique original Tilda URL (removed the shared local placeholder entirely)
I left the generated local asset files (frontend/src/assets/icons/*.svg, frontend/src/assets/photos/*.jpg) on disk untouched — nothing references them anymore, but I didn't delete them, so if you revert this via git, they'll already be back in place and ready to use again immediately.