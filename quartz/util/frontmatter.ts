import { alias } from "yargs"
import { Description } from "../plugins"

export const QuartzFrontmatterSchema = z.object({
  title: z.string().optional(),
  tags: z.array(z.string()).default([]),
  RealName: z.string().optional(),
  Gender: z.union([z.string(), z.array(z.string())]).optional(),
  sticker: z.string().optional(),
  Nickname: z.string().optional(),
  Height: z.string().optional(),
  Age: z.string().optional(),
  正面感情觸發物: z.string().optional(),
  Identity: z.string().optional(),
  負面感情觸發物: z.string().optional(),
  category: z.string().optional(),

})

export type QuartzFrontmatter = z.infer<typeof QuartzFrontmatterSchema> 