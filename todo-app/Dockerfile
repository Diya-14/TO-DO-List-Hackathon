# =========================
# Frontend Dockerfile
# =========================

# Base image
FROM node:20-alpine AS base

# -------------------------
# Dependencies stage
# -------------------------
FROM base AS deps
WORKDIR /app

# Needed for some packages
RUN apk add --no-cache libc6-compat

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# -------------------------
# Builder stage
# -------------------------
FROM base AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js app
RUN npm run build

# -------------------------
# Runner / Production stage
# -------------------------
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PUBLIC_API_URL="http://todo-backend-service:8000"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files from builder
COPY --from=builder /app/public ./public

# Set permission for prerender cache
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
