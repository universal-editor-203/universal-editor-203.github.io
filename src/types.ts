/** Shared types for Foxor Universal Editor (v1.1.7) */

export type ModuleId = "video" | "rom" | "file" | "music" | "rust";

export interface ModuleMeta {
  id: ModuleId;
  title: string;
  description: string;
  hash: string;
}

export const MODULES: readonly ModuleMeta[] = [
  {
    id: "video",
    title: "Video Editor",
    description: "Filmora-style timeline with FFmpeg.wasm",
    hash: "#video",
  },
  {
    id: "rom",
    title: "ROM Editor",
    description: "Organize and inspect game ROMs",
    hash: "#rom",
  },
  {
    id: "file",
    title: "File Editor",
    description: "Edit text and download results",
    hash: "#file",
  },
  {
    id: "music",
    title: "Music Editor",
    description: "Load and preview audio tracks",
    hash: "#music",
  },
  {
    id: "rust",
    title: "Rust Module",
    description: "Write, template, and download .rs",
    hash: "#rust",
  },
] as const;

export type FlavorId = "core" | "blitz" | "next";

export interface FlavorMeta {
  id: FlavorId;
  name: string;
  status: "live" | "soon";
  repo?: string;
}

export const FLAVORS: readonly FlavorMeta[] = [
  {
    id: "blitz",
    name: "Blitz.js",
    status: "live",
    repo: "https://github.com/universal-editor-203/universal-editor-blitz",
  },
  {
    id: "next",
    name: "Next.js",
    status: "live",
    repo: "https://github.com/universal-editor-203/universal-editor-next",
  },
] as const;

export const VERSION = "1.1.7" as const;
